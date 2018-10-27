using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace TripStyle.Models
{
    public class Role
    {
        public int RoleId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }
}