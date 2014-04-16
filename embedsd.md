---
layout: base
title:  'Embedded SD Visualisation test'
---

<p>This example illustrates automatic parse visualization and dynamic
editing using the Stanford dependency format.</p>

<div id="simple-example" class="sd-parse">
Dogs run
nsubj(run, Dogs)
</div>

<p>View source to see the raw HTML that is rendered into the
visualization.  (Any element with the "sd-parse" class is
converted.)</p>

<p>Click on the tab on the top right to edit the visualization. (Note
that edits are not saved -- there's no server.)</p>

<div class="sd-parse">
You can have any number of these .
nsubj(have-3, You-1)
aux(have-3, can-2)
det(number-5, any-4)
dobj(have-3, number-5)
prep(number-5, of-6)
pobj(of-6, these-7)
</div>

<p>You can have any number of visualizations on a page, and any
standard HTML content can be freely mixed with the visualizations.</p>

<p>POS tags are optional and use the format "text/POS".</p>

<div class="sd-parse">
POS/NNP tags/NNS can/MD be/VB attached/VBN to/TO ( any part of ) the/DT sentence/NN text/NN ./.
dep(tags-2, POS-1)
nsubjpass(attached-5, tags-2)
aux(attached-5, can-3)
auxpass(attached-5, be-4)
prep(attached-5, to-6)
det(text-14, the-12)
nn(text-14, sentence-13)
pobj(to-6, text-14)
det(part, any)
prep(part, of)
</div>

<p>Any literal slashes ("/") can be escaped using backslash.</p>

<div class="sd-parse">
\\/\\ escapes/VBZ :/: \\o\//\\o\/
nsubj(escapes, \)
</div>

<p>Everything is unicode-compliant:</p>

<div class="sd-parse">
ロボットは/何でもいい 東大に/分かんない  入れる/です か/よね 。/。
nsubj(入れる, ロボットは)
nommod(入れる, 東大に)
</div>

<p>Basic support for linking and reference-based numbering is included:
  see <a href="#simple-example" class="embed-ref">Example #</a>
</p>
