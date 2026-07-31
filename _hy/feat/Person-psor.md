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

`Person[psor]` is the possessor's person, marked for exmaple on [nouns](NOUN), [emphatic pronouns](PronType), [infinitives](VerbForm), or [adpositions](ADP). In possessive uses, such forms typically correspond to an English possessive determiner followed by a noun. We do not annotate possessive determiners with `Person[psor]`, as they are actually identical to personal pronouns in the genitive case.

Note that traditional Armenian grammars distinguish possessive, demonstrative, and personal articles (suffixes) in addition to the definite article. The same set of suffixes serves all three functions. Depending on the context, they may indicate that the referent is near the speaker (proximal, first person), near the addressee (second person), or distant from both (third person), or they may express possession by one of them. Consequently, the subscript `[psor]` does not always denote a possessor in this feature, as the same annotation is also used for person-indexing function of these suffixes. The person-indexing and possessive functions can only be distinguished from context.

See also the related features `Number[psor]` and `Deixis[psor]`.

### <a name="1">`1`</a>: first person possessor

#### Examples

* _տուն<b>ս</b>_/_town<b>s</b>_ “<b>my</b> house” `Number=Sing|Number[psor]=Sing|Person[psor]=1`
* _տներ<b>ս</b>_/_tner<b>s</b>_ “<b>my</b> houses” `Number=Plur|Number[psor]=Sing|Person[psor]=1`
* _գալ<b>ս</b>_/_gal<b>s</b>_ “<b>my</b> coming” `Number[psor]=Sing|Person[psor]=1`
* _(ես) ուսուցիչ<b>ս</b>_/_(es) owsowcʼič<b>s</b>_ “<b>I</b>, the teacher” or “<b>my</b> teacher” `Number=Sing|Person[psor]=1` or `Number=Sing|Number[psor]=Sing|Person[psor]=1`
* _ինք<b>ս</b>_/_inkʼ<b>s</b>_ “<b>myself</b>” `Number=Sing|Number[psor]=Sing|Person[psor]=1`
* _հետ<b>ս</b>_/_het<b>s</b>_ “with <b>me</b>” `Number[psor]=Sing|Person[psor]=1`

### <a name="2">`2`</a>: second person possessor

#### Examples

* _տուն<b>դ</b>_/_town<b>d</b>_ “<b>your</b> `Sing` house” `Number=Sing|Number[psor]=Sing|Person[psor]=2`
* _տներ<b>դ</b>_/_tner<b>d</b>_ “<b>your</b> `Sing` houses” `Number=Plur|Number[psor]=Sing|Person[psor]=2`
* _գալ<b>դ</b>_/_gal<b>d</b>_ “<b>your</b> `Sing` coming” `Number[psor]=Sing|Person[psor]=2`
* _(դու) ուսուցիչ<b>դ</b>_/_(dow) owsowcʼič<b>d</b>_ “<b>you</b> `Sing`, the teacher” or “<b>your</b> `Sing` teacher” `Number=Sing|Person[psor]=2` or `Number=Sing|Number[psor]=Sing|Person[psor]=2`
* _ինք<b>դ</b>_/_inkʼ<b>d</b>_ “<b>you</b> `Sing` <b>yourself</b>” `Number=Sing|Number[psor]=Sing|Person[psor]=2`
* _հետ<b>դ</b>_/_het<b>d</b>_ “with <b>you</b> `Sing`” `Number[psor]=Sing|Person[psor]=2`

### <a name="3">`3`</a>: third person possessor

#### Examples

* _տուն<b>ն(ը)</b>_/_town<b>n(ë)</b>_ “<b>his/her/its</b> house” `Number=Sing|Number[psor]=Sing|Person[psor]=3` 
* _տներ<b>ն(ը)</b>_/_tner<b>n(ë)</b>_ “<b>his/her/its</b> houses” `Number=Plur|Number[psor]=Sing|Person[psor]=3` 
* _(նա) ուսուցիչ<b>ն(ը)</b>_/_(na) owsowcʼič<b>n(ë)</b>_ “<b>he/she</b>, the teacher” or “<b>his/her/its</b> teacher” `Number=Sing|Person[psor]=3` or `Number=Sing|Number[psor]=Sing|Person[psor]=3`
* _գալ<b>ն(ը)</b>_/_gal<b>n(ë)</b>_ “<b>his/her/its</b> coming” `Number[psor]=Sing|Person[psor]=3`
* _հետ<b>ն(ը)</b>_/_het<b>n(ë)</b>_ “with <b>him/her/it</b>” `Number[psor]=Sing|Person[psor]=3`

Note that forms containing _-ն_/_-n_ or _-ը_/_-ë_ may be ambiguous, since these morphemes are also definite articles, and their function can only be determined from the context (see above).
<!-- Interlanguage links updated Út 30. června 2026, 10:59:11 CEST -->
