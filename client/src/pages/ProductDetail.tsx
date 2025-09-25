import { useParams, Link } from "wouter";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { EnhancedProductType, allProducts, mattressImages } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, ShoppingCart, Grid3X3, Star, Shield, Truck, Store, Home, ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import ProductCard from "@/components/products/ProductCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function ProductDetailPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState<EnhancedProductType | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<EnhancedProductType[]>([]);
  const [enquireOpen, setEnquireOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    length: "",
    breadth: "",
    thickness: "",
  });
  
  // Keen slider setup with autoplay
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    created: () => {
      setLoaded(true);
    },
    slideChanged: (s) => {
      setCurrentSlide(s.track.details.rel);
    },
    renderMode: "performance",
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const lengthOptions = ["72", "75", "78"];
  const breadthOptions = ["36", "48", "60", "72"];
  const thicknessOptions = ["4", "6", "8"];

  // Set up autoplay
  useEffect(() => {
    if (slider.current && loaded) {
      const interval = setInterval(() => {
        slider.current?.next();
      }, 3000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [slider, loaded]);
  
  // Keen slider navigation handlers
  const goPrev = () => slider.current?.prev();
  const goNext = () => slider.current?.next();
  
  useEffect(() => {
    if (productId) {
      const foundProduct = allProducts.find(
        p => p.id.toLowerCase() === productId.toLowerCase()
      );
      if (foundProduct) {
        setProduct(foundProduct);
        
        // Find related products (same category, different dimensions)
        const related = allProducts.filter(p => 
          p.category === foundProduct.category && 
          p.id !== foundProduct.id
        ).slice(0, 3);
        
        setRelatedProducts(related);
      }
    }
  }, [productId]);
  
  // Dummy function for now, we're not implementing comparison on this page
  const handleAddToCompare = () => {};
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 pt-24">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Product not found</h1>
          <p className="mt-4">The product you're looking for doesn't exist or has been removed.</p>
          <Link href="/products">
            <Button className="mt-4">Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  // Get images for the product category
  const images =
    mattressImages[product.category as keyof typeof mattressImages] && 
    mattressImages[product.category as keyof typeof mattressImages].length > 0
      ? mattressImages[product.category as keyof typeof mattressImages]
      : [product.image];
  
  return (
    <>
      <Helmet>
        <title>{product.title.split("\n\n")[0]} | VIZKO Mattresses</title>
        <meta name="description" content={product.description} />
      </Helmet>
      
      <section className="pt-24 bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          {/* Breadcrumb Navigation - Updated to show product ID */}
          <nav className="flex items-center space-x-1 text-sm text-gray-500 mb-6">
            <Link href="/">
              <a className="flex items-center hover:text-primary transition-colors duration-200">
                <Home className="h-4 w-4 mr-1" />
                Home
              </a>
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            <Link href="/products">
              <a className="hover:text-primary transition-colors duration-200 capitalize">
                Products
              </a>
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            <span className="text-gray-900 font-medium uppercase">
              {productId?.toLowerCase()}
            </span>
          </nav>

          <div className="mb-6">
            <Link href="/products">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Products
              </Button>
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Main Product Section - Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
              <div className="relative">
                {/* Keen Slider Implementation */}
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg bg-gray-100">
                  <div ref={sliderRef} className="keen-slider w-full h-full">
                    {images.map((img, idx) => (
                      <div key={idx} className="keen-slider__slide flex items-center justify-center w-full h-full bg-gray-100">
                        <img
                          src={img.startsWith("http") ? `/api/image-proxy?url=${encodeURIComponent(img)}` : img}
                          alt={`${product.title} ${idx + 1}`}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                  {images.length > 1 && loaded && (
                    <>
                      <button
                        aria-label="Previous"
                        onClick={goPrev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow p-2 rounded-full z-10"
                        type="button"
                      >
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M13 17l-5-5 5-5" />
                        </svg>
                      </button>
                      <button
                        aria-label="Next"
                        onClick={goNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow p-2 rounded-full z-10"
                        type="button"
                      >
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M7 7l5 5-5 5" />
                        </svg>
                      </button>
                    </>
                  )}
                </div>
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </div>
              </div>
              
              <div>
                <div className="bg-gray-50 p-4 rounded-md mb-6">
                  <h1 className="text-2xl font-bold text-primary">{product.title.split("\n\n")[0]}</h1>
                  {product.title.split("\n\n")[1] && (
                    <h2 className="text-lg text-gray-700">{product.title.split("\n\n")[1]}</h2>
                  )}
                  {typeof product.rating === 'number' && (
                    <div className="flex items-center gap-1 mt-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`${(product.rating ?? 0) > i ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} h-4 w-4`} />
                      ))}
                      {product.reviewsCount ? (
                        <span className="text-xs text-gray-500 ml-1">{product.reviewsCount} ratings</span>
                      ) : null}
                    </div>
                  )}
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-700">{product.description}</p>
                  
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">Highlights</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {(product.highlights ?? []).map((h, idx) => (
                        <li key={idx}>{h}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Product Details Table (SKU, Size/Dimensions, Colour, Material, Handle/Strap, MOQ, Category) */}
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-green-700 mb-2">Product Details</h4>
                    <div className="overflow-hidden rounded-md border border-green-400">
                      <table className="w-full text-sm">
                        <tbody>
                          <tr className="border-b border-green-300/70">
                            <td className="w-40 bg-white/60 px-4 py-3 font-semibold text-gray-800">Product Code</td>
                            <td className="px-4 py-3 text-gray-900">{product.id}</td>
                          </tr>
                          <tr className="border-b border-green-300/70">
                            <td className="w-40 bg-white/60 px-4 py-3 font-semibold text-gray-800">Size/Dimensions</td>
                            <td className="px-4 py-3 text-gray-900">{`${product.length}" x ${product.breadth}" x ${product.height}"`}</td>
                          </tr>
                          <tr className="border-b border-green-300/70">
                            <td className="w-40 bg-white/60 px-4 py-3 font-semibold text-gray-800">Colour</td>
                            <td className="px-4 py-3 text-gray-900">{(product.specs as any)?.Colour ?? 'Natural'}</td>
                          </tr>
                          <tr className="border-b border-green-300/70">
                            <td className="w-40 bg-white/60 px-4 py-3 font-semibold text-gray-800">Material</td>
                            <td className="px-4 py-3 text-gray-900">{(product.materials && product.materials.length > 0) ? product.materials.join(', ') : ((product.specs as any)?.Material ?? '—')}</td>
                          </tr>
                          <tr className="border-b border-green-300/70">
                            <td className="w-40 bg-white/60 px-4 py-3 font-semibold text-gray-800">Handle/Strap</td>
                            <td className="px-4 py-3 text-gray-900">{(product.specs as any)?.HandleStrap ?? 'NA'}</td>
                          </tr>
                          <tr className="border-b border-green-300/70">
                            <td className="w-40 bg-white/60 px-4 py-3 font-semibold text-gray-800">MOQ</td>
                            <td className="px-4 py-3 text-gray-900">{(product.specs as any)?.MOQ ?? '10 Pieces'}</td>
                          </tr>
                          <tr>
                            <td className="w-40 bg-white/60 px-4 py-3 font-semibold text-gray-800">Product Category</td>
                            <td className="px-4 py-3 text-gray-900">{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {product.specs && (
                    <div className="mt-4">
                      <p className="text-sm text-gray-500 mb-2">Specifications</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {Object.entries(product.specs).map(([k, v]) => {
                          const label = k.replace(/([A-Z])/g, ' $1').trim();
                          return (
                            <div key={k} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                              <div className="text-xs uppercase tracking-wide text-gray-500 mb-1">{label}</div>
                              <div className="text-sm text-gray-900 font-medium leading-snug">{v}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  
                  <Separator className="my-6" />
                  
                  <div className="flex flex-col gap-6">
                    {/* <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700">
                      <span className="inline-flex items-center gap-1"><Store className="h-4 w-4 text-primary" /> Seller: <span className="font-medium ml-1">{product.seller ?? 'VIZKO Sleep Co.'}</span></span>
                      <span className="inline-flex items-center gap-1"><Shield className="h-4 w-4 text-primary" /> {product.warranty ?? 'Warranty available'}</span>
                      <span className="inline-flex items-center gap-1"><Truck className="h-4 w-4 text-primary" /> {product.delivery ?? 'Free delivery'}</span>
                    </div> */}
                    <Button onClick={() => setEnquireOpen(true)} className="w-full md:w-auto bg-primary hover:bg-primary/90">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Enquire Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Full-Width Product Details Section */}
            <div className="border-t border-gray-200">
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {product.boxContents && product.boxContents.length > 0 && (
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-primary mb-2">In the Box</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        {product.boxContents.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {product.materials && product.materials.length > 0 && (
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-primary mb-2">Materials</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.materials.map((m, idx) => (
                          <span key={idx} className="bg-white border border-gray-200 rounded-full px-3 py-1 text-xs text-gray-700">{m}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {product.careInstructions && product.careInstructions.length > 0 && (
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-primary mb-2">Care Instructions</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        {product.careInstructions.map((c, idx) => (
                          <li key={idx}>{c}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {product.certifications && product.certifications.length > 0 && (
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-primary mb-2">Certifications</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        {product.certifications.map((c, idx) => (
                          <li key={idx}>{c}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                {/* FAQ Section - Full Width */}
                {product.faqs && product.faqs.length > 0 && (
                  <div className="mt-6">
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-primary mb-3">Frequently Asked Questions</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {product.faqs.map((f, idx) => (
                          <div key={idx} className="border-b last:border-b-0 pb-3">
                            <div className="text-sm font-medium text-gray-900">Q: {f.q}</div>
                            <div className="text-sm text-gray-700 mt-1">A: {f.a}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Additional Information Section */}
            <div className="p-6 bg-gray-50 border-t border-gray-100">
              <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Mattresses are roll-packed in rexine for safe transportation</li>
                <li>Export-grade materials meeting international standards</li>
                <li>Custom sizing available for bulk orders</li>
                <li>Vacuum-sealed packaging available upon request</li>
              </ul>
              
              {/* Reviews - Full Width */}
              {product.reviews && product.reviews.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-medium text-primary mb-3">Customer Reviews</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {product.reviews.map((r, idx) => (
                      <div key={idx} className="bg-white border border-gray-200 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium text-gray-900">{r.name}</div>
                          <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <span key={i} className={`${(r.rating ?? 0) > i ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                            ))}
                          </div>
                        </div>
                        <div className="text-sm text-gray-700 mt-1">{r.comment}</div>
                        {r.date && <div className="text-xs text-gray-500 mt-1">{r.date}</div>}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Q&A - Full Width */}
              {product.qa && product.qa.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-medium text-primary mb-3">Questions & Answers</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.qa.map((q, idx) => (
                      <div key={idx} className="bg-white border border-gray-200 rounded-lg p-3">
                        <div className="text-sm font-medium text-gray-900">Q: {q.question}</div>
                        <div className="text-sm text-gray-700 mt-1">A: {q.answer}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <Separator className="my-8" />
          
          {/* Related Products */}
          {relatedProducts.length > 1 && (
            <div className="mt-12">
              <div className="flex items-center gap-2 mb-6">
                <Grid3X3 className="text-primary h-5 w-5" />
                <h3 className="text-xl font-semibold">Related Products</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map(relatedProduct => (
                  <ProductCard
                    key={relatedProduct.id}
                    product={relatedProduct}
                    onAddToCompare={handleAddToCompare}
                    isInCompare={false}
                    showCompareButton={false}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      {/* Enquiry Modal */}
      <Dialog open={enquireOpen} onOpenChange={setEnquireOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Enquire about {product?.title.split("\n\n")[0]}</DialogTitle>
          </DialogHeader>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setSubmitting(true);
              try {
                const formData = new FormData();
                formData.append("access_key", "685a36e8-634c-4f0c-980b-6d937e96e041");
                formData.append("subject", `Enquiry: ${product?.title.split("\n\n")[0]} (${product?.id})`);
                formData.append("productCode", product?.id ?? "");
                formData.append("name", formValues.name);
                formData.append("email", formValues.email);
                formData.append("phone", formValues.mobile);
                formData.append("message", `Product: ${product?.title.split("\n\n")[0]} (ID: ${product?.id})\nSize: ${formValues.length}\" x ${formValues.breadth}\" x ${formValues.thickness}\"\nAddress: ${formValues.address}`);
                const resp = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
                const data = await resp.json();
                if (data.success) {
                  setEnquireOpen(false);
                  setFormValues({ name: "", email: "", mobile: "", address: "", length: "", breadth: "", thickness: "" });
                } else {
                  alert(data.message || "Failed to send enquiry.");
                }
              } catch (err) {
                alert("Failed to send enquiry. Please try again.");
              } finally {
                setSubmitting(false);
              }
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input placeholder="Product Code" value={product?.id} readOnly />
              <Input placeholder="Name" required value={formValues.name} onChange={(e) => setFormValues(v => ({ ...v, name: e.target.value }))} />
              <Input type="email" placeholder="Email" required value={formValues.email} onChange={(e) => setFormValues(v => ({ ...v, email: e.target.value }))} />
              <Input placeholder="Mobile" required value={formValues.mobile} onChange={(e) => setFormValues(v => ({ ...v, mobile: e.target.value }))} />
              <div />
              <div>
                <Select value={formValues.length} onValueChange={(val) => setFormValues(v => ({ ...v, length: val }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Length (inches)" />
                  </SelectTrigger>
                  <SelectContent>
                    {lengthOptions.map((opt) => (
                      <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select value={formValues.breadth} onValueChange={(val) => setFormValues(v => ({ ...v, breadth: val }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Breadth (inches)" />
                  </SelectTrigger>
                  <SelectContent>
                    {breadthOptions.map((opt) => (
                      <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select value={formValues.thickness} onValueChange={(val) => setFormValues(v => ({ ...v, thickness: val }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Thickness (inches)" />
                  </SelectTrigger>
                  <SelectContent>
                    {thicknessOptions.map((opt) => (
                      <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="sm:col-span-2">
                <Textarea rows={4} placeholder="Address" value={formValues.address} onChange={(e) => setFormValues(v => ({ ...v, address: e.target.value }))} />
              </div>
            </div>
            <DialogFooter className="mt-4">
              <Button type="button" variant="outline" onClick={() => setEnquireOpen(false)}>Cancel</Button>
              <Button type="submit" disabled={submitting}>{submitting ? "Sending..." : "Send Enquiry"}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
