use anchor_lang::prelude::*;

declare_id!("Hshwp4hWwnpygRMjNHu7Mto6PKAuSDQrSALXTA1BBe5T");

#[program]
pub mod genesis {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
