using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace JwtAuthDotNet8.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestController : ControllerBase
    {
        [Authorize]
        [HttpGet("secure")]
        public IActionResult SecureData()
        {
            return Ok("This is protected data.");
        }

        [AllowAnonymous]
        [HttpGet("public")]
        public IActionResult PublicData()
        {
            return Ok("This is public data.");
        }
    }
}

