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

### <a name="Clf">`Clf`</a>: classifier

Thai classifiers are generally used to express the quantities and characteristics of a head noun.

#### Examples

* 

### <a name="Nmlz">`Nmlz`</a>: nominalization

In Thai, two nouns can also be used to nominalize a verb or a verb clause whose verb is action or stative/adjectival.

การ /kaːn/ is a noun which basically means "work" or "a thing to be done". The noun is placed before an action verb to nominalize the verb or the verb clause semantically.

ความ /khwaːm/ is a noun which basically means "conditions" or "manners". The noun is placed before a stative or adjectival verb to nominalize the verb or the verb clause semantically.

They can also be placed before a relative clause to nominalize the clause semantically as well.

#### Examples

~~~ sdparse
การ/NOUN ขาย/VERB บ้าน/NOUN ทำให้/VERB เขา/PRON มี/VERB เงิน/NOUN \n kaːn khǎːj bâːn tham-hâj khǎw miː ŋɤn \n a-thing-to-be-done sell house make he have money
acl(การ, ขาย)
acl(kaːn, khǎːj)
acl(a-thing-to-be-done, sell)    
~~~

~~~ sdparse
เขา/PRON มี/VERB ความ/NOUN มั่นใจ/VERB ใน/ADP การ/NOUN ทำงาน/VERB \n khǎw miː khwaːm mân-caj naj kaːn tham-ŋaːn \n he have condition be-confident in a-thing-to-be-done work    
acl(ความ, มั่นใจ)
acl(khwaːm, mân-caj)  
acl(การ, ทำงาน)
acl(kaːn, tham-ŋaːn)  
~~~

```
# text = การที่เราวิ่งอย่างสม่ำเสมอทำให้ร่างกายแข็งแรง
# tokenised_text = การ ที่ เรา วิ่ง อย่าง สม่ำเสมอ ทำให้ ร่างกาย แข็งแรง
# text_en = Running regularly keeps us healthy and strong.
1	การ	การ	NOUN	_	NounType=Nmlz	7	nsubj	_	SpaceAfter=No|Gloss=a thing to be done|Translit=kaːn
2	ที่	ที่	PRON	_	PronType=Rel	4	dislocated	_	SpaceAfter=No|Gloss=that(REL)|Translit=thîː
3	เรา	เรา	PRON	_	Person=1|PronType=Prs	4	nsubj	_	SpaceAfter=No|Gloss=we|Translit=raw
4	วิ่ง	วิ่ง	VERB	_	_	1	acl:relcl	_	SpaceAfter=No|Gloss=run|Translit=wîŋ
5	อย่าง	อย่าง	NOUN	_	_	4	obl	_	SpaceAfter=No|Gloss=way|Translit=jàːŋ
6	สม่ำเสมอ	สม่ำเสมอ	VERB	_	_	5	acl	_	SpaceAfter=No|Gloss=be regular|Translit=sà-màm-sà-mɤ̌ː
7	ทำให้	ทำให้	VERB	_	_	0	root	_	SpaceAfter=No|Gloss=make|Translit=tham-hâj
8	ร่างกาย	ร่างกาย	NOUN	_	_	7	obj	_	SpaceAfter=No|Gloss=body|Translit=râːŋ-kaːj
9	แข็งแรง	แข็งแรง	VERB	_	_	7	xcomp	_	Gloss=be strong|Translit=khɛ̌ːŋ-rɛːŋ
```
<!-- Interlanguage links updated Út 30. června 2026, 10:59:03 CEST -->
