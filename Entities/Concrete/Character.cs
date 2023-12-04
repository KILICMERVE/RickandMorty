using Core.Enities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Concrete
{
    public class Character : IEntity
    {
        public int CharacterId { get; set; }
        public string EpisodeNumber { get; set; }
        public string CharacterName { get; set; }
        public string Photo { get; set; }
        public string Description { get; set; }

    }
}
