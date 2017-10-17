---
layout: feature
title: 'Definite'
shortdef: 'definiteness or state'
redirect_from: "u/feat/Definiteness.html"
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Com">Com</a></td>
  <td><a href="#Cons">Cons</a></td>
  <td><a href="#Def">Def</a></td>
  <td><a href="#Ind">Ind</a></td>
  <td><a href="#Spec">Spec</a></td>
</tr>
</table>

Definiteness is typically a feature of nouns, adjectives and
articles. Its value distinguishes whether we are talking about
something known and concrete, or something general or unknown. It can
be marked on definite and indefinite [articles](u-pos/DET), or
directly on [nouns](u-pos/NOUN), [adjectives](u-pos/ADJ) etc.  In
Arabic, definiteness is also called the "state".

### <a name="Ind">`Ind`</a>: indefinite

In languages where `Spec` is distinguished the value `Ind` is interpreted as non-specific
indefinite, i.e. “any (one) stick”.

#### Examples

* [en] _<b>a</b> dog_
* [sv] _<b>en hund</b>_ “a dog”

### <a name="Spec">`Spec`</a>: specific indefinite

Specific indefinite, e.g. “a certain stick”.
Occurs e.g. in Lakota.
In languages where it is used the value `Ind` is interpreted as non-specific
indefinite, i.e. “any (one) stick”.

### <a name="Def">`Def`</a>: definite

#### Examples

* [en] _<b>the</b> dog_
* [sv] _<b>hunden</b>_ “the dog”

### <a name="Cons">`Cons`</a>: construct state / reduced definiteness

Used in [construct
state](http://en.wikipedia.org/wiki/Status_constructus) in Arabic. If
two nouns are in genitive relation, the first one (the "nomen regens")
has "reduced definiteness," the second is the genitive and can be
either definite or indefinite.  Reduced form has neither the definite
morpheme (article), nor the indefinite morpheme (nunation).

Note that in UD v1 this value was called `Red`. It has been renamed `Cons` in
UD v2.

#### Examples

* [ar] indefinite state:
  حلوَةٌ
  _ḥulwatun_ "a sweet";
  definite state:
  الحلوَةُ
  _al-ḥulwatu_ "the sweet";
  construct state:
  <b>حلوَةُ </b>
  _<b>ḥulwatu</b>_
  "sweet of".

### <a name="Com">`Com`</a>: complex

Used in <A
HREF="http://books.google.cz/books?id=rs3hzfgj3hoC&amp;pg=PA131&amp;lpg=PA131&amp;dq=arabic+improper+annexation&amp;source=bl&amp;ots=d6gGCpprOX&amp;sig=3G6YkRZsIy_EL0OCEh7_V7qqnlE&amp;hl=cs&amp;ei=ZasDTuLhGc_vsgaLlcyeDg&amp;sa=X&amp;oi=book_result&amp;ct=result&amp;resnum=2&amp;ved=0CB4Q6AEwAQ#v=onepage&amp;q=arabic%20improper%20annexation&amp;f=false">improper
annexation</A> in Arabic. The genitive construction described above
normally consists of two nouns (first reduced, second genitive). That
is called proper annexation or iḍāfa. If the first member is an
adjective or adjectivally used participle and the second member is a
definite noun, the construction is called improper annexation or false
iḍāfa.  The result is a compound adjective that is usually used as an
attributive adjunct and thus must agree in definiteness with the noun
it modifies. Its first part (the adjective or participle) may get
again the definite article. Although it may look the same as the form
for the definite state, it is assigned a special value of _complex_
state to reflect the different origin. See also <A
HREF="http://ufal.mff.cuni.cz/padt/PADT_1.0/docs/papers/2004-nemlar-padt.pdf">Hajič
et al.</A> page 3.

#### Examples:

* [ar] مُخْتَلِفٌ  _muxtalifun_ "different/various" (active participle,
  Form VIII); نَوْعٌ ج أنْوَاعٌ _nawˀun ja anwāˀun_ "kind"; مُخْتَلِفُ
  الأنْوَاعِ _muxtalifu al-anwāˀi_ "of various kinds" (false iḍāfa);
  مَشَاكِلُ مُخْتَلِفَةُ الأنْوَاعِ _mašākilu muxtalifatu al-anwāˀi_
  "problems of various kinds"; اَلْمَشَاكِلُ <b>الْمُخْتَلِفَةُ</b>
  الأنْوَاعِ _al-mašākilu <b>al-muxtalifatu</b> al-anwāˀi_ "the
  problems of various kinds".
