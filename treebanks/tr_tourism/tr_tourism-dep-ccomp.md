---
layout: base
title:  'Statistics of ccomp in UD_Turkish-Tourism'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Tourism: Relations: `ccomp`

This relation is universal.

228 nodes (0%) are attached to their parents as `ccomp`.

224 instances of `ccomp` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.30701754385965.

The following 13 pairs of parts of speech are connected with `ccomp`: <tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt> (165; 72% instances), <tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt> (17; 7% instances), <tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt> (10; 4% instances), <tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt> (9; 4% instances), <tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt> (6; 3% instances), <tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt> (5; 2% instances), <tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="tr_tourism-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="tr_tourism-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tourism-pos-CCONJ.html">CCONJ</a></tt> (2; 1% instances), <tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tourism-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 ccomp	color:blue
1	ÖDEDİĞİM	öde	ADJ	_	_	2	acl	_	_
2	ÜCRETİN	ücret	NOUN	_	Case=Gen|Number=Sing|Person=3	3	nmod	_	_
3	KARŞILIĞINI	karşılık	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	4	obj	_	_
4	ALAMADIĞIMI	al	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	5	ccomp	_	_
5	DÜŞÜNÜYORUM	düşün	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 ccomp	color:blue
1	SÜPERDİ	süper	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	ccomp	_	_
2	DİYEBİLİRİM	de	VERB	_	Aspect=Hab|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
3	ODALAR	oda	NOUN	_	Case=Nom|Number=Plur|Person=3	2	nmod	_	_
4	İÇİN	için	ADP	_	_	3	case	_	_
5	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 ccomp	color:blue
1	GİDİP	git	ADV	_	_	2	advcl	_	_
2	GÖRMENİZ	gör	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=2	3	ccomp	_	_
3	GEREKEN	gerek	ADJ	_	_	5	acl	_	_
4	BİR	bir	DET	_	Definite=Ind	5	det	_	_
5	TESİS	tesis	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


