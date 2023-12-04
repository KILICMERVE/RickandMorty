using Business.Abstract;
using DataAccess.Abstract;
using DataAccess.Concrete.EntityFramework;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Concrete
{
    public class CharacterManager : ICharacterService
    {
        ICharacterDal _characterDal;

        public CharacterManager(ICharacterDal characterDal)
        {
            _characterDal = characterDal;
        }

        public void AddCharacter(Character character)
        {
            _characterDal.Add(character);
        }

        public List<Character> GetAll()
        {
            return _characterDal.GetList();
        }
    }
}
