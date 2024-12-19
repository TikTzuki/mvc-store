import {MONEY_RANGE, PRODUCT_SORT} from "./dummy.js";

const newFilterTitle = (title) => {
    return `<h3 class="-my-3 flow-root">
                <button type="button" class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0"
                        aria-expanded="false">
                    <span class="font-medium text-gray-900">${title}</span>
                    <span class="ml-6 flex items-center">
                                <svg class="size-5 hidden" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                  <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"/>
                                </svg>
                                <svg class="size-5 hidden" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                  <path fill-rule="evenodd" d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z" clip-rule="evenodd"/>
                                </svg>
                              </span>
                </button>
            </h3>`
}

const newCheckBox = (value, title) => {
    return `<div class="pt-6" id="filter-section-0">
                <div class="space-y-4">
                    <div class="flex gap-3">
                        <div class="flex h-5 shrink-0 items-center">
                            <div class="group grid size-4 grid-cols-1">
                                <input id="filter-color-0" name="color[]" value="${value}" type="checkbox"
                                       class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-rose-600 checked:bg-rose-600 indeterminate:border-rose-600 indeterminate:bg-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                <svg class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                     viewBox="0 0 14 14" fill="none">
                                    <path class="opacity-0 group-has-[:checked]:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path class="opacity-0 group-has-[:indeterminate]:opacity-100" d="M3 7H11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                        <label for="filter-color-0" class="text-sm text-gray-600">${title}</label>
                    </div>
                </div>
            </div>`
}
const newSelect = (items) => {
    const options = items.map(i => {
        return `<option value="${i.value}">${i.title}</option>`
    }).join('');
    return `<select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-600 block w-full p-2.5">
                        ${options}
                    </select>`
}

const newFilterSection = (type, filterTitle, filterItems) => {
    const title = newFilterTitle(filterTitle);
    let content;
    switch (type) {
        case "SELECT":
            content = newSelect(filterItems);
            break;
        case "CHECKBOX":
            content = filterItems.map(item => newCheckBox(item.value, item.title)).join('');
    }
    console.log(filterItems, content)
    return `<div class="border-b border-gray-200 py-6">
                        ${title} ${content}
                </div>`
}
const filters = document.querySelectorAll("form[name='product-filter']");
console.log(filters)
filters.forEach(e => {
    e.innerHTML +=
        newFilterSection("SELECT", "Sắp xếp", PRODUCT_SORT)
        + newFilterSection("CHECKBOX", "Khoảng giá", MONEY_RANGE)
    ;
})