using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OM_Integration.Models
{
    [Table("Customers")]
    public class Customer
    {
        [Key]
        public int id { get; set; }

        public string name { get; set; }

        public string approverName { get; set; }

        public string approverEmail { get; set; }
    }
}
