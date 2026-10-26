---
layout: feature
title: 'Person[psor]'
shortdef: 'possessor’s person'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#1">1</a></td>
  <td><a href="#2">2</a></td>
  <td><a href="#3">3</a></td>
</tr>
</table>

`Person[psor]` is the possessor's person, marked for example on [nouns](NOUN), [emphatic pronouns](PronType), [infinitives](VerbForm), or [adpositions](ADP). In possessive uses, such forms typically correspond to an English possessive pronoun followed by a noun.

We do not annotate possessive determiners with `Person[psor]`, as they are actually identical to personal pronouns in the genitive case.

Note that Western Armenian grammars distinguish possessive, demonstrative, and personal articles (suffixes) in addition to the definite article. The same set of suffixes serves all three functions. Depending on the context, they may indicate that the referent is near the speaker (proximal, first person), near the addressee (second person), or distant from both (third person), or they may express possession by one of them. Consequently, the subscript `[psor]` does not always denote a possessor in this feature, as the same annotation is also used for the person-indexing function of these suffixes. The person-indexing and possessive uses can only be distinguished from context.

See also the related features `Number[psor]` and `Deixis[psor]`.

### <a name="1">`1`</a>: first person possessor

#### Examples

* _ձեռք<b>ս</b>_/_jeṙkʼ<b>s</b>_ “<b>my</b> hand” `Number=Sing|Number[psor]=Sing|Person[psor]=1`
* _ձեռքեր<b>ս</b>_/_jeṙkʼer<b>s</b>_ “<b>my</b> hands” `Number=Plur|Number[psor]=Sing|Person[psor]=1`
* _ըլլալ<b>ս</b>_/_ëllal<b>s</b>_ “<b>my</b> being” `Number[psor]=Sing|Person[psor]=1`
* _մենք՝ հայեր<b>ս</b>_/_menkʼ, hayer<b>s</b>_ “<b>we</b>, the Armenians” `Number=Plur|Person[psor]=1`
* _ամենքնի<b>ս</b>_/_amenkʼni<b>s</b>_ “<b>we</b> all” or “<b>my</b> teacher” `Number[psor]=Plur|Person[psor]=1`
* _քով<b>ս</b>_/_kʼov<b>s</b>_ “next to <b>me</b>, by <b>my</b> side” `Number[psor]=Sing|Person[psor]=1`

### <a name="2">`2`</a>: second person possessor

#### Examples

* _ձեռք<b>դ</b>_/_jeṙkʼ<b>d</b>_ “<b>your</b> `Sing` hand” `Number=Sing|Number[psor]=Sing|Person[psor]=2`
* _աչքեր<b>դ</b>_/_ačkʼer<b>d</b>_ “<b>your</b> `Sing` eyes” `Number=Plur|Number[psor]=Sing|Person[psor]=2`
* _ըլլալ<b>դ</b>_/_ëllal<b>d</b>_ “<b>your</b> `Sing` being” `Number[psor]=Sing|Person[psor]=2`
* _(դուք) բժիշկներ<b>դ</b>_/_(dowkʼ) bžiškner<b>d</b>_ “<b>you</b> `Plur` the doctors” or “<b>your</b> doctors” `Number=Plur|Person[psor]=2` or `Number=Plur|Number[psor]=Sing|Person[psor]=2`
* _ինքզինք<b>դ</b>_/_inkʼzinkʼ<b>d</b>_ “<b>you</b>, `Sing` <b>yourself</b>” `Number=Sing|Person[psor]=2`
* _քով<b>դ</b>_/_kʼov<b>d</b>_ “next to <b>you</b>, by your `Sing` side” `Number[psor]=Sing|Person[psor]=2`

### <a name="3">`3`</a>: third person possessor

#### Examples

* _ձեռուընի<b>ն</b>_/_jeṙowëni<b>n</b>_ “<b>their</b> hands” `Number=Plur|Number[psor]=Sing|Person[psor]=3`
* _աչքերնի<b>ն</b>_/_ačkʼerni<b>n</b>_ “<b>their</b> eyes” `Number=Plur|Number[psor]=Plur|Person[psor]=3`
* _ինքզինք<b>ը</b>_/_inkʼzinkʼ<b>ë</b>_ “he himself, she herself” `Number=Sing|Person[psor]=3`
* _չգիտնալնուն_/_čgitnalnown_ “(because of) their not knowing” `Number[psor]=Plur|Person[psor]=3`
* _քով<b>ն(ը)</b>_/_kʼov<b>n(ë)</b>_ “with <b>him/her/it</b>” `Number[psor]=Sing|Person[psor]=3`
* _նոյնինք<b>ն</b>_/_noyninkʼ<b>n</b>_ “the very / himself / herself / itself” `Number=Sing|Person[psor]=3`

Note that forms containing _-ն_/_-n_ or _-ը_/_-ë_ may be ambiguous, since these morphemes are also definite articles, and their function can only be determined from the context (see above).
<!-- Interlanguage links updated Út 30. června 2026, 10:59:11 CEST -->
