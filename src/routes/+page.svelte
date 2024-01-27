<svelte:head>
    <title>Calculator App Svelte</title>
    <meta name="description" content="Svelte demo app" />
    <link rel="icon" href="/favicon.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kelly+Slab&family=Syncopate:wght@700&display=swap" rel="stylesheet">
</svelte:head>

<script>
    import Button from "../routes/Button/+page.svelte";
</script>

<main class="wrapper">
    <div class="calculator">
        <button class="CE">CE</button>
        <div class="display"><span>128673</span></div>
        <Button/>
    </div>
</main>
<style>
    :global(body) {
        background: #f2f2f2;
        margin: 0;
        font-family: --font;
    }
    .wrapper {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .calculator {
        width: 641px;
        padding: 57px;
        border-radius: 50px;
        background: #AAB1BB;
        height: 779px;
        margin: auto auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 45px;
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
        max-height: 100px;
    }
    .display span{ 
        font-size: 75px;
        padding-right: 21px;
        font-family: 'Kelly Slab', 'sans-serif';
    }
    .CE {
        max-height: 100px;
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