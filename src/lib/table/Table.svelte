<script>
    import Sort from "$lib/table/Sort.svelte";

    export let headers
    export let rows
    export let sortable = false

    let sort = []
</script>

<div class="px-[40px] py-[30px] shadow rounded-2xl">
    <slot name="panel" >

    </slot>

    <table class="w-full">
        <!--    header-->
        <tr>
            <th></th>
            {#each headers as header, i}
                <th class="text-start py-4">
                    <div class="flex items-center gap-[5px]" on:click={()=>{if(sortable && header.sort === undefined) {sort[i].sort();} console.log(sortable && header.sort)}}>
                        <slot name="header" header={header}>
                            {header.value}
                        </slot>
                        <Sort bind:this={sort[i]}/>
                    </div>
                </th>
            {/each}
            <th></th>
        </tr>

        <!--    body-->
        {#each rows as row}
            <tr class="border-t-[1px] border-[#F9F9F9]">
                <td></td>
                {#each row as cell}
                    <td class="py-4">
                        <slot name="cell">
                            {cell.value}
                        </slot>
                    </td>
                {/each}
                <td></td>
            </tr>
        {/each}
    </table>
</div>



<slot name="body"></slot>