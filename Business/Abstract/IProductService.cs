using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.ConstrainedExecution;
using System.Text;
using System.Threading.Tasks;

namespace Business.Abstract
{
    public interface IProductService
    {
        void AddProduct(Product product);
        void RemoveProduct(Product product);
        void UpdateProduct(Product product);
        Product GetById(int productId);
        List<Product> GetAll();
        //List<Product> GetProductsByCategoryId(int categorryId);
    }
}
