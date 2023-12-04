using Business.Abstract;
using Entities.Concrete;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CharacterController : ControllerBase
    {
        ICharacterService _characterService;

        public CharacterController(ICharacterService characterService)
        {
            _characterService = characterService;
        }

        [HttpGet("getall")]
        public ActionResult<IEnumerable<Character>> GetAll()
        {
            return Ok(_characterService.GetAll());
        }

        [HttpPost("add")]
        public IActionResult Add(Character character)
        {
            _characterService.AddCharacter(character);
            return CreatedAtAction(nameof(GetAll), new { id = character.CharacterId }, character);
        }
    }
}