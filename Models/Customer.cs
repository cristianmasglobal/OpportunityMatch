using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OM_Integration.Models
{
    [Table("Customers")]
    public class Customer
    {
        [Key]
        public int id { get; set; }

        public string clientName { get; set; }

        public string approveName { get; set; }

        public string approveEmail { get; set; }

        public bool isMSArequired { get; set; }
    }
}
