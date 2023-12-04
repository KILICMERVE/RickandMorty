using Business.Abstract;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Concrete
{
    public class ProductManager : IProductService
    {
        IProductDal _productDal;

        public ProductManager(IProductDal productDal)
        {
            _productDal = productDal;
        }

        public void AddProduct(Product product)
        {
            _productDal.Add(product);
        }

        public List<Product> GetAll()
        {
           return _productDal.GetList();
        }

        public Product GetById(int productId)
        {
           return  _productDal.Get(p => p.ProductId == productId);
        }

        public void RemoveProduct(Product product)
        {
            _productDal.Delete(product);
        }

        public void UpdateProduct(Product product)
        {
            _productDal.Update(product);
        }
    }
}
