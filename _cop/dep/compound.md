---
layout: relation
title: 'compound'
shortdef: 'compound'
---

Used to connect compound noun heads to their modifier. For example, the compound ‘accomplice’ is comprised of ‘friend’ and ‘doing’ (a ‘doing-friend’), which is a type of ‘friend’ (not a type of ‘doing’). Therefore ‘friend’ is the head, and ‘doing’ is attached to it via the function `compound`:

~~~ sdparse
ⲡⲉ/ART ϣⲃⲣ/NOUN ⲣϩⲱⲃ/NOUN \n accomplice! (lit. 'the friend-doing' or 'the doing-friend')

det(ϣⲃⲣ, ⲡⲉ)
compound(ϣⲃⲣ, ⲣϩⲱⲃ)
vocative(ϣⲃⲣ)
~~~


**Note:** This label is only used for cases in which tokenization has left parts of a compound as separate units. Generally speaking, Coptic Scriptorium guidelines specify that compound constituents are only annotated at the morpheme level, and do not constitute independent normalized units which are assigned a part of speech. As a result, this label should almost never be needed in corpora following Scriptorium segmentation practices; but for exceptional cases or corpora not following these practices, the `compound` label is the alternative.
<!-- Interlanguage links updated Út zář 29 20:23:23 CEST 2020 -->
