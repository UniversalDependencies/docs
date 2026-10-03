---
layout: feature
title: 'NounType'
shortdef: 'noun type'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Clf">Clf</a></td>
  <td><a href="#Nmlz">Nmlz</a></td>
</tr>
</table>

### <a name="Nmlz">`Nmlz`</a>: nominalization

In Thai, two nouns are mainly used to nominalize a verb clause whose verb is action or stative/adjectival as well as a relative clause.

การ /kaːn/ is a noun which basically means "work" or "a thing to be done". The noun is placed before an action verb to nominalize the verb or the verb clause semantically. 

ความ /khwaːm/ is a noun which basically means "conditions" or "manners". The noun is placed before a stative or adjectival verb to nominalize the verb or the verb clause semantically.

They can also be placed before a relative clause to nominalize the clause semantically as well.

#### Examples

~~~ sdparse
# text = การขายบ้านทำให้เขามีเงิน
# tokenised_text = การ ขาย บ้าน ทำให้ เขา มี เงิน
# text_en = Selling (his) house brought him some money.
1	การ	การ	NOUN	_	NounType=Nmlz	4	nsubj	_	SpaceAfter=No|Gloss=a thing to be done|Translit=kaːn
2	ขาย	ขาย	VERB	_	_	1	acl	_	SpaceAfter=No|Gloss=sell|Translit=khǎːj
3	บ้าน	บ้าน	NOUN	_	_	2	obj	_	SpaceAfter=No|Gloss=house|Translit=bâːn
4	ทำให้	ทำให้	VERB	_	_	0	root	_	SpaceAfter=No|Gloss=make|Translit=tham-hâj
5	เขา	เขา	PRON	_	Person=3|PronType=Prs	4	obj	_	SpaceAfter=No|Gloss=he|Translit=khǎw
6	มี	มี	VERB	_	_	4	xcomp	_	SpaceAfter=No|Gloss=have|Translit=miː
7	เงิน	เงิน	NOUN	_	_	6	obl:arg	_	Gloss=money|Translit=ŋɤn
~~~


<!-- Interlanguage links updated Út 30. června 2026, 10:59:03 CEST -->
