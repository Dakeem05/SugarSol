<template>
  <div class="relative min-h-screen flex items-center pb-[1rem] md:pb-0">
    <!-- Background with gradient and image -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-sugar-300/70 via-sugar-500/60 to-sugar-900/70 z-10"></div>
      <div class="absolute inset-0 flex justify-center items-center">
        <img 
          src="/assets/images/dog-removebg.png" 
          alt="SugarDog Background" 
          class="w-[80%] md:w-[60%] mt-32 md:mt-20 opacity-90 object-contain"
        />
      </div>
    </div>

    <!-- Content -->
    <div class="relative z-20 container mx-auto px-4 md:mt-[4rem] pt-32 md:pt-20">
      <div class="max-w-4xl mx-auto text-center animate-slide-up opacity-0">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up opacity-0" style="animation-delay: 200ms;">
          Welcome to SugarDog
        </h1>
        <p class="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto animate-slide-up opacity-0" style="animation-delay: 400ms;">
          The sweetest memecoin on Solana. Join our community and be part of the next big thing in the crypto world.
        </p>

        <!-- Exchange Logos -->
        <div class="mt-16 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mx-auto w-[70%] animate-slide-up opacity-0" style="animation-delay: 800ms;">
          <a class="exchange-button bg-white/10 backdrop-blur-sm flex gap-[1rem] p-4 rounded-xl hover:bg-white/20 transition-all duration-200 w-full place-content-center relative overflow-hidden group" href="https://dexscreener.com/solana/dudh6bcgx2gwnqmywzuw61bnqkr3sokgysjktoakj1ay" target="_blank">
            <div class="relative z-10 flex gap-[1rem] items-center">
              <img src="/assets/images/dexscreener.svg" alt="Exchange 1" class="h-8 opacity-70 group-hover:opacity-100 transition-opacity" />
              <h1 class="pt-1 font-bold text-white group-hover:text-sugar-200">Chart</h1>
            </div>
            <div class="absolute inset-0 bg-gradient-to-r from-sugar-400/20 via-sugar-300/20 to-sugar-400/20 animate-shimmer"></div>
          </a>
          <a class="exchange-button bg-white/10 backdrop-blur-sm flex gap-[1rem] p-4 rounded-xl hover:bg-white/20 transition-all duration-200 w-full place-content-center relative overflow-hidden group" href="https://jup.ag/swap/SOL-vAvhwLv35DoLzMnxwupStTD21YBEBJKNStPcCdzpump" target="_blank">
            <div class="relative z-10 flex gap-[1rem] items-center">
              <img src="/assets/images/jupiter.svg" alt="Exchange 1" class="h-8 opacity-70 group-hover:opacity-100 transition-opacity" />
              <h1 class="pt-1 font-bold text-white group-hover:text-sugar-200">Buy $Sugardog on Jupiter</h1>
            </div>
            <div class="absolute inset-0 bg-gradient-to-r from-sugar-400/20 via-sugar-300/20 to-sugar-400/20 animate-shimmer"></div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes pulse-border {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(255, 181, 204, 0.4);
  }
  50% {
    box-shadow: 0 0 0 4px rgba(255, 181, 204, 0.4);
  }
}

@keyframes slideUp {
  0% {
    transform: translateY(30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}

.exchange-button {
  animation: pulse-border 2s infinite;
  transition: all 0.3s ease;
}

.exchange-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 181, 204, 0.3);
}

.animate-slide-up {
  animation: slideUp 0.6s ease-out forwards;
}
</style>
