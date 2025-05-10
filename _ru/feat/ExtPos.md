---
layout: feature
title: 'ExtPos'
shortdef: 'external part of speech'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#ADJ">ADJ</a></td>
  <td><a href="#ADP">ADP</a></td>
  <td><a href="#ADV">ADV</a></td>
  <td><a href="#CCONJ">CCONJ</a></td>
  <td><a href="#DET">DET</a></td>
  <td><a href="#INTJ">INTJ</a></td>
  <td><a href="#NOUN">NOUN</a></td>
  <td><a href="#NUM">NUM</a></td>
  <td><a href="#PART">PART</a></td>
  <td><a href="#PRON">PRON</a></td>
  <td><a href="#PROPN">PROPN</a></td>
  <td><a href="#SCONJ">SCONJ</a></td>
  <td><a href="#VERB">VERB</a></td>
</tr>
</table>

This feature differs significantly from all other features: It describes neither the lexical category,
nor the inflectional paradigm slot of the token it appears on. Rather than to the individual token,
it pertains to a multiword expression and indicates the part of speech that the expression would get
if it were analyzed as a single word. `ExtPos` is annotated at the head node of the multiword
expression. The possible values are taken from the defined [UPOS tags](/u/pos/index.html) and no other
values are allowed (not even at the language-specific level). The main motivation for `ExtPos` is that
the multiword expression may behave like a part of speech different from the UPOS of the head node;
however, `ExtPos` is sometimes used even if it is identical to the UPOS of the head node. Also, it is
not strictly necessary that the expression is multiword – if one of the words of the expression is
omitted by mistake, or if a single word has been coerced into a part of speech different from its
lexical one, `ExtPos` may be used to signal it.

`ExtPos` feature is used in fixed functional multiword expressions (the head node has one
or more children attached via the [fixed]() relation). However, `ExtPos` is occasionally useful in other situations, too:
for example, when a multiword expression acts as a proper noun (although its parts behave like other
words) or as an interjection.

### <a name="ADJ">`ADJ`</a>: adjective-like expression

#### Examples

* _<b>так себе</b>_ (a multiword adjective paraphrasable as “so so”, lit. "so to_oneself"; the first node is [ADV](ru-pos/ADV))
* _(я) <b>сам по себе</b>_ (a multiword adjective paraphrasable as “(I am) on my own”, lit. "self on oneself"; the first node is [DET](ru-pos/DET))
* _(складки) <b>одна к одной</b>_ (a multiword adjective paraphrasable as “(the folds are) one to one, perfectly fit”, lit. "one to one"; the first node is [DET](ru-pos/NUM))
* _<b>один-единственный</b> (комар)_ (a multiword adjective paraphrasable as “one single (mosquito)”; the first node is [NUM](ru-pos/NUM))

### <a name="ADP">`ADP`</a>: adposition-like expression

#### Examples

* _<b>в отличие от</b> меня_ “<b>in contrast to</b> me” (here the first node is a preposition itself, so UPOS = `ExtPos`)
* _<b>несмотря на</b> успехи_ “<b>disregarding</b> one's achievements” (here the first node is a [ADV](ru-pos/ADV))

### <a name="ADV">`ADV`</a>: adverb-like expression

The multiword parentheticals are also considered as adverb-like expressions.

#### Examples

* _<b>в конце концов</b>_ (a multiword adverb paraphrasable as “eventually, finally”, lit. "in the end of ends"; the first node is [ADP](ru-pos/ADP))
* _<b>только что</b> (пришел)_ (a multiword adverb paraphrasable as “just (came)”, lit. "only what"; the first node is [PART](ru-pos/PART))
* _<b>нет-нет да и</b> (спросит)_ (a multiword adverb paraphrasable as “from time to time, every now and then (he asks)”, lit. "no-no and and"; the first node is [VERB](ru-pos/VERB))
* _<b>тем не менее</b>_ (a multiword parenthetical paraphrasable as “nevertheless”, lit. "by-that no less"; the first node is [DET](ru-pos/DET))
* _<b>между прочим</b>_ (a multiword parenthetical paraphrasable as “by the way”, lit. "between other"; the first node is [ADP](ru-pos/ADP))

### <a name="CCONJ">`CCONJ`</a>: coordinating conjunction-like expression

#### Examples

* _<b>не только</b>_ (a multiword coordinating conjunction paraphrasable as “not only... (but ...)”; the first node is [PART](ru-pos/PART))
* _<b>но и</b>_ (a multiword coordinating conjunction paraphrasable as “but”, lit. "but even"; the first node is [CCCONJ](ru-pos/CCONJ), so UPOS = `ExtPos`)
* _<b>т. е.</b>_, _<b>то есть</b>_ “i. e.” (_то_ = [PRON](ru-pos/PRON))  

### <a name="DET">`DET`</a>: determiner-like expression

#### Examples

* _<b>что за</b> красота_ (a multiword determiner paraphrasable as “what (a beauty)”, lit. "what for"; the first node is [PRON](ru-pos/PRON))
* _<b>какой бы то ни было </b> формы_ (a multiword determiner paraphrasable as “any (form) whatsoever”, lit. "which would it not was"; the first node is [DET](ru-pos/DET), so UPOS = `ExtPos`)

### <a name="INTJ">`INTJ`</a>: interjection-like expression

#### Examples

* _<b>ей Богу</b>!_ “for God’s sake” (_ей_ = [INTJ](ru-pos/INTJ), _Богу_ = [NOUN](ru-pos/NOUN))
* _<b>господи боже</b>!_ “for God’s sake” (_господи_ = [NOUN](ru-pos/NOUN), _боже_ = [NOUN](ru-pos/NOUN))
* _<b>ну и</b> жарко!_ “well (it's hot)”, lit. "well and" (_ну_ = [PART](ru-pos/PART), _и_ = [CCONJ](ru-pos/CCONJ))

### <a name="NOUN">`NOUN`</a>: noun-like expression

#### Examples

* _<b>прелесть что такое</b>!_ (_прелесть_ = [NOUN](ru-pos/NOUN), _что_ = [PRON](ru-pos/PRON), _такое_ = [DET](ru-pos/DET))

### <a name="NUM">`NUM`</a>: numeral-like expression

#### Examples

* _<b>сколько угодно</b> случаев_ “as many cases as you like“ (_сколько_ = [NUM](ru-pos/NUM))

### <a name="PART">`PART`</a>: particle-like expression

#### Examples

* _<b>того и гляди</b>_ “just wait and see“ (_того_ = [PRON](ru-pos/PRON))
* _<b>разве что</b>_ “just wait and see“ (_разве_ = [PART](ru-pos/PART))
* _<b>чуть не</b>_ “almost“ (_чуть_ = [PART](ru-pos/PART))
* _<b>хоть бы</b> минуту_ “at least (for a minute)“ (_хоть_ = [PART](ru-pos/PART))

### <a name="PRON">`PRON`</a>: pronoun-like expression

#### Examples

* _<b>друг друга</b>_ (_each_ = [DET](ru-pos/DET))

### <a name="PROPN">`PROPN`</a>: proper noun-like expression

#### Examples

* _роман "<b>Война и мир</b>"_ “novel "War and Peace"” (_war_ = [NOUN](ru-pos/NOUN))

### <a name="SCONJ">`SCONJ`</a>: subordinator-like expression

#### Examples

### <a name="VERB">`VERB`</a>: verb-like (predicative) expression

#### Examples

* _Я <b>не прочь</b> позавтракать_ “I wouldn't mind having breakfast“ (_не_ = [PART](ru-pos/PART), _прочь_ = [ADV](ru-pos/ADV) < comparative form of _прокыи_, i.e. “not far from“)
* _мне <b>не по себе</b>_ “I feel uneasy“, lit. “not for oneself“ (_не_ = [PART](ru-pos/PART), _по_ = [ADP](ru-pos/ADP), _себе_ = [PRON](ru-pos/PRON))
* _мне <b>всё равно</b>, где учиться_ “(I) don't care (where to study)“, lit. “all (is) equal“ (_всё_ = [PRON](ru-pos/PRON), _равно_ = [ADJ](ru-pos/ADJ))
* _а ему <b>хоть бы хны</b>_ “(he) does not give a damn“, lit. “at-least whould whimper“ (_хоть_, _бы_ = [PART](ru-pos/PART), _хны_ = [INTJ](ru-pos/INTJ))
* _ящик <b>ни туда ни сюда</b>_ “(the box is) neither here nor there“ (_ни_ = [PART](ru-pos/PART), _туда_, _сюда_ = [ADV](ru-pos/ADV))

<!-- Interlanguage links updated So 10. května 2025, 18:14:06 CEST -->
