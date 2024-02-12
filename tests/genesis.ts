import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Genesis } from "../target/types/genesis";
import { expect } from 'chai'

describe("genesis", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Genesis as Program<Genesis>;

  it("Is initialized!", async () => {
    // Add your test here.
    const gameKeyPair = anchor.web3.Keypair.generate();
    const playerOne = (program.provider as anchor.AnchorProvider).wallet;
    const playerTwo = anchor.web3.Keypair.generate();
    
    // initialising by calling the constructor method and initialise the accounts
    await program.methods.initializeGame(playerTwo.publicKey).accounts({
      game: gameKeyPair.publicKey,
      playerOne: playerOne.publicKey

    }).signers([gameKeyPair]).rpc();

    // check the game state
    let gameState = await program.account.game.fetch(gameKeyPair.publicKey);
   
    // check balances for player1
    const balancePlayerOne = 


  });
});
