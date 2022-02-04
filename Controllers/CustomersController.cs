using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OM_Integration.Context;
using OM_Integration.Models;
using System.Threading.Tasks;

namespace OM_Integration.Controllers
{
    public class CustomersController : Controller
    {
        private readonly AppDbContext _context;

        public CustomersController(AppDbContext context)
        {
            _context = context;
        }

        private async Task<Customer> CustomerExist(int? id)
        {
            return await _context.customers.FirstOrDefaultAsync(m => m.id == id).ConfigureAwait(false);
        }

        [HttpGet("customers")]
        public IActionResult Get()
        {
            return new ObjectResult(_context.customers) { StatusCode=200};
        }

        [HttpGet("customers/{id}")]
        public async Task<IActionResult> GetById(int? id)
        {
            if (id == null)
                return new ObjectResult("Customer is null") { StatusCode = 400 };

            var client = await CustomerExist(id);
            
            if (client == null)
                return new ObjectResult("Customer not found") { StatusCode = 400 };

            return new ObjectResult(client) { StatusCode = 200 };
        }

        [HttpPost("customers/")]
        public async Task<IActionResult> Create([FromBody]Customer client)
        {
            Customer customerfound = await CustomerExist(client.id);

            if (customerfound != null) 
                return new ObjectResult("Customer already exists") { StatusCode = 400 };

            _context.customers.Add(client);
            var result = await _context.SaveChangesAsync().ConfigureAwait(false);

            if (result == 1)
                return new ObjectResult("Customer created") { StatusCode = 200 };
            
            return new ObjectResult("Customer creation error") { StatusCode = 200 };
        }

        [HttpDelete("customers/{id}")]
        public async Task<IActionResult> Delete(int? id)
        {
            Customer clientExist = await _context.customers.FirstOrDefaultAsync(m => m.id == id).ConfigureAwait(false); ;

            if (clientExist == null)
                return new ObjectResult("Customer not found") { StatusCode = 400 };

            _context.customers.Remove(clientExist);
            var result = await _context.SaveChangesAsync().ConfigureAwait(false);

            if (result == 1)
                return new ObjectResult("Customer deleted") { StatusCode = 200 };

            return new ObjectResult("Customer removal error") { StatusCode = 200 };
        }

        [HttpPut("customers/{id}")]
        public async Task<IActionResult> Update(int? id, [FromBody] Customer client)
        {

            if (id == null)
                return new ObjectResult("Customer id is null") { StatusCode = 400 };

            Customer clientExist =  await CustomerExist(id);

            if (clientExist == null)
                return new ObjectResult("Customer not found") { StatusCode = 400 };

            client.id = id.GetValueOrDefault();
            _context.Entry(clientExist).CurrentValues.SetValues(client);
            var result = await _context.SaveChangesAsync().ConfigureAwait(false);

            if (result == 1)
                return new ObjectResult("Customer Updated") { StatusCode = 200 };

            return new ObjectResult("Customer updated error") { StatusCode = 400 };
        }


    }
}
