<script type="module">
import { ORAKEL_CORE } from "./orakel.core.js";
import { ORAKEL_SET } from "./set.orakel.js";

const frageInput = document.getElementById("frage");
const output = document.getElementById("output");

document.getElementById("run").onclick = () => {
    const val = frageInput.value || "81";
    const result = ORAKEL_CORE(val);
    output.textContent = JSON.stringify(result, null, 2);
};

document.getElementById("reset").onclick = () => {
    const result = ORAKEL_SET();
    output.textContent = JSON.stringify(result, null, 2);
};
</script>
