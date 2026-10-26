---
layout: base
title:  'Statistics of cc in UD_Ottoman_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-BOUN: Relations: `cc`

This relation is universal.
There are 1 language-specific subtypes of `cc`: <tt><a href="ota_boun-dep-cc-preconj.html">cc:preconj</a></tt>.

228 nodes (3%) are attached to their parents as `cc`.

225 instances of `cc` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.56578947368421.

The following 7 pairs of parts of speech are connected with `cc`: <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-CCONJ.html">CCONJ</a></tt> (128; 56% instances), <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-CCONJ.html">CCONJ</a></tt> (46; 20% instances), <tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_boun-pos-CCONJ.html">CCONJ</a></tt> (38; 17% instances), <tt><a href="ota_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ota_boun-pos-CCONJ.html">CCONJ</a></tt> (11; 5% instances), <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 cc	color:blue
1	Saatten	saat	NOUN	_	Case=Abl|Number=Sing|Person=3	2	obl	_	TokenRange=128:135ساعتدن
2	kastımız	kasıt	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=1	5	nsubj	_	TokenRange=136:144قصتيمز
3	zamanı	zaman	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	4	obj	_	TokenRange=145:151زمانى
4	ölçen	ölç	VERB	Ptcp	Polarity=Pos|Tense=Pres|VerbForm=Part	5	acl	_	TokenRange=152:157اولچن
5	alet	alet	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	TokenRange=158:162آلت
6	değil	değil	AUX	Neg	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	5	aux	_	TokenRange=163:168دكل
7	fakat	fakat	CCONJ	_	_	9	cc	_	TokenRange=169:174فقط
8	bizzat	bizzat	ADV	_	_	9	advmod	_	TokenRange=175:181بالذات
9	zamandır	zaman	NOUN	_	Case=Nom|Number=Sing|Person=3	5	conj	_	SpaceAfter=No|TokenRange=182:190زماندر
10	.	.	PUNCT	Stop	_	9	punct	_	SpacesAfter=\r\n|TokenRange=190:191|.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 cc	color:blue
1	Lâkin	lâkin	CCONJ	_	_	5	cc	_	لكن
2	Bedîa	Bedîa	PROPN	_	Case=Nom|Number=Sing|Person=3	5	nsubj	_	بديعه
3	işte	iş	ADV	_	_	5	discourse	_	ايشته
4	hiç	hiç	ADV	_	_	5	advmod	_	هيچ
5	çıkmıyordu	çık	VERB	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Neg|Tense=Past	0	root	_	چيقميوردى
6	.	.	PUNCT	Stop	_	5	punct	_	.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cc	color:blue
1	Vapur	vapur	NOUN	_	Case=Acc|Number=Sing|Person=3	10	nsubj	_	واپور
2	saçtığı	saç	VERB	Ptcp	Aspect=Perf|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	3	acl	_	صاچديغى
3	köpükler	köpük	NOUN	_	Case=Nom|Number=Plur|Person=3	4	nmod:poss	_	كوپوكلر
4	arasından	ara	NOUN	_	Case=Abl|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	10	obl	_	اًراسندن
5	,	,	PUNCT	Comma	_	10	punct	_	,
6	mest	mest	ADJ	_	Case=Nom|Number=Sing|Person=3	10	advmod	_	مست
7	ve	ve	CCONJ	_	_	8	cc	_	و
8	dilbâz	dilbâz	ADJ	_	Case=Nom|Number=Sing|Person=3	6	conj	_	دلباز
9	,	,	PUNCT	Comma	_	10	punct	_	,
10	süzülüyordu	süzülüyordu.	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	سوزولوبوردى
11	.	.	PUNCT	Stop	_	10	punct	_	.

~~~


