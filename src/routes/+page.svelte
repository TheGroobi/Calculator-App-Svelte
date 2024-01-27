<svelte:head>
    <title>Calculator App Svelte</title>
    <meta name="description" content="Svelte demo app" />
    <link rel="icon" href="/favicon.png" />
    <link href="https://fonts.googleapis.com/css2?family=Syncopate:wght@700&display=swap" rel="stylesheet">
    <link href="https://fonts.cdnfonts.com/css/calculator" rel="stylesheet">
</svelte:head>

<script>
    import { writable } from 'svelte/store';
    import Button from "./Button/+page.svelte";
    import { calcDisplay } from "./Math-Equations/+page.js";
    let userInput;
</script>

<main class="wrapper">
    <div class="calculator">
        <button on:click={() => calcDisplay.set('0')} class="CE">CE</button>
        <div class="display" data-placeholder="0" contenteditable bind:textContent={$calcDisplay} ></div>
        <Button /> 
        <!-- --inner-shadow="rgba(0, 0, 0, 0.25)" -->
    </div>
</main>
<style>
    :global(body) {
        background: #f2f2f2;
        margin: 0;
    }
    .wrapper {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .calculator {
        width: calc(641px * 0.7);
        padding: calc(57px * 0.7);
        border-radius: 50px;
        background: #AAB1BB;
        height: calc(779px * 0.7);
        margin: auto auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 0.85fr repeat(4, 1fr);
        gap: 20px;
        box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.5);
    }
    .display {
        grid-row: 1;
        grid-column: 1 / -1;
        background: #4F6C62;
        border-radius: 20px;
        text-align: right;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        filter: drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.25));
        font-family: 'Calculator', sans-serif;
        font-size: 75px;
        padding-right: 21px;
    }
    .CE {
        grid-row: 1;
        grid-column: 1 / 2;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        z-index: 1;
        border: none;
        font-size: 50px;
        background: rgba(204, 42, 42, 0.5);
        color: white;
    }
</style>