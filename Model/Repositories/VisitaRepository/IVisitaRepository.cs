﻿using Microsoft.EntityFrameworkCore;
using Model.Context;
using Model.Entities.Visita;

namespace Model.Repositories.Entretenimento
{

    public interface IVisitaRepository {
        Task<IEnumerable<Visita>> GetAllVisita();
        Task<Visita?> GetVisitaById(int id);
        Task AddVisita(Visita visita);
        Task SaveChangesAsync();
    }

    public class VisitaRepository : IVisitaRepository {
        private readonly TheHouseContext _context;

        public VisitaRepository(TheHouseContext context) {
            _context = context;
        }

        public async Task<IEnumerable<Visita>> GetAllVisita() {
            return await _context.Visita.ToListAsync();
        }

        public async Task<Visita?> GetVisitaById(int id) {
            return await _context.Visita.FindAsync(id);
        }

        public async Task AddVisita(Visita visita) {
            await _context.Visita.AddAsync(visita);
        }

        public async Task SaveChangesAsync() {
            await _context.SaveChangesAsync();
        }
    }
}
