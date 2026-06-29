---
layout: feature
title: 'Emph'
shortdef: 'emph'
udver: '2'
---

In Coptic, the feature `Emph` designates use of the focalizing converter (`xpos=CFOC`) and fused pronominal forms containing it (`xpos=CFOC_PPERS`).
The only possible value for `Emph` is `Yes` - all other tokens are assumed to be non-emphatic.

### <a name="Yes">`Yes`</a>: focalizing converter

The value `Yes` is used for the focalizing converter

#### Examples

* _<b>ⲉ</b>ⲓϣⲁϫⲉ ⲉⲣⲟ_ "I'm speaking to YOU!" (as opposed to someone else) - the focalizer attaches to the verb complex
* _<b>ⲛⲧ</b>ⲁⲧⲉⲧⲛϫⲓ-ⲃⲁⲡⲧⲓⲥⲙⲁ ⲉⲡⲣⲁⲛ ⲙⲡⲁⲩⲗⲟⲥ_ "You were baptized in the name of PAUL"

If the focalizer is part of a fused pronoun, we get a `PRON` with `Emph=Yes`:

* _<b>ⲉⲣ</b>ϫⲓ-ϭⲟⲗ_ "You're LYING!" (2nd person singular feminine)
<!-- Interlanguage links updated Po 29. června 2026, 18:10:39 CEST -->
