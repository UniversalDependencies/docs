---
layout: base
title: 'list'
shortdef: 'list'
---

## list: list

The *list* relation is used for chains of comparable items. Web text often contains passages which are meant to be interpreted as lists but are parsed as single sentences. Email signatures in particular contain these structures, in the form of contact information: the different contact information items are labeled as *list*; the key-value pair relations are labeled as *appos*.

<div class="sd-parse">
Steve Jones Phone: 555-9814 Email: jones@abc.edf
name(Jones-2, Steve-1)
list(Jones-2, Phone:-3)
list(Jones-2, Email:-5)
appos(Phone:-3, 555-9814-4)
appos(Email:-5, jones@abc.edf-6)
</div>
