<script>
    import { handleNumberClick } from '../Math-Equations/+page.js';
</script>

    {#each [7, 8, 9, '÷', 4, 5, 6, '*', 1, 2, 3, '-', '.', 0, '=', '+'] as item}
        {#if typeof item === 'number' || item === '.'}
            <button on:click={(e) => handleNumberClick(e, item)}>{item}</button>
        {:else if item === '='}
            <button class="equal-btn">{item}</button>
        {:else}
            <button class="dark-btn">{item}</button>
        {/if}
    {/each}
<style>
    button {
        font-size: 50px;
        border-radius: 15px;
        background-color: var(--color, #63778E);
        color: var(--font-color, rgba(0, 0, 0, 0.55));
        border: none;
        font-family: 'Syncopate', 'sans-serif';
        box-shadow: 2px 2px 4px 0px var(--inner-shadow, rgba(255, 255, 255, 0.25)) inset;
        filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.25));
    }
    .dark-btn {
        --color: #37424F;
        --font-color: white;
    }
    .equal-btn {
        --color: #234E81;
        --font-color: white;
    }
</style>