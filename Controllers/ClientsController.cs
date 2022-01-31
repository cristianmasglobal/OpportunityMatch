using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using OM_Integration.Context;
using OM_Integration.Models;

namespace OM_Integration.Controllers
{
    public class ClientsController : Controller
    {
        private readonly AppDbContext _context;
        private readonly ILogger<ClientsController> _logger;

        public ClientsController(AppDbContext context, ILogger<ClientsController> logger)
        {
            _context = context;
            _logger = logger;
        }

        [HttpGet("clients")]
        public IEnumerable<Client> Get()
        {
            return _context.clients;
        }
    }
}
