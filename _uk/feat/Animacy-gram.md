---
layout: feature
title: 'Animacy[gram]'
shortdef: 'grammatical animacy'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Anim">Anim</a></td>
  <td><a href="#Inan">Inan</a></td>
</tr>
</table>

Similarly to [Gender](), animacy is a lexical feature of [nouns](uk-pos/NOUN) and inflectional feature of other parts of speech that mark agreement with nouns. It is independent of gender, therefore it is encoded separately in most tagsets (e.g. all the Multext-East tagsets).

For certain Ukrainian word groups it is also possible to use alternative animate flections for inanimate nouns and inanimate flections for animate nouns. This phenomenon is only possible for the accusative case. Sometimes, although not in all situations, this switch (inanimisation or animisation) has a colloquial stylistic effect. Adjectives and determiners agree with such forms. A special layered feature `Animacy[gram]` is used to record such uses.

### <a name="Anim">`Anim`</a>: animate inflection

If a noun is semantically inanimate but its accusative form follows the animate paradigm, it will
have `Animacy=Inan|Animacy[gram]=Anim`.

#### Examples

* _він носив <b>машингвера</b>&nbsp;_ “he carried a machine gun”

### <a name="Inan">`Inan`</a>: inanimate inflection

If a noun is semantically animate but its accusative form follows the inanimate paradigm, it will
have `Animacy=Anim|Animacy[gram]=Inan`.

#### Examples

* _посилають під три <b>чорти</b>&nbsp;_ “they send (it) under three devils” (idiomatic expression)

<!-- Interlanguage links updated Čt lis 12 09:43:02 CET 2020 -->
