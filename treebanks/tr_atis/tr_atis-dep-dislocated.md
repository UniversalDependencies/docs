---
layout: base
title:  'Statistics of dislocated in UD_Turkish-Atis'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Atis: Relations: `dislocated`

This relation is universal.

5 nodes (0%) are attached to their parents as `dislocated`.

4 instances of `dislocated` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 9.

The following 3 pairs of parts of speech are connected with `dislocated`: <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (3; 60% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-ADV.html">ADV</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 dislocated	color:blue
1	ücret	ücret	NOUN	_	Case=Nom|Number=Sing|Person=3	2	nmod	_	_
2	kodunu	kod	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	4	obj	_	_
3	tekrar	tekrar	ADV	_	_	4	advmod	_	_
4	görmek	gör	NOUN	_	Case=Nom|Number=Sing|Person=3	5	xcomp	_	_
5	istiyorum	iste	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
6	qx	qx	NOUN	_	Case=Acc|Number=Sing|Person=3	5	dislocated	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 9 dislocated	color:blue
1	San	san	PROPN	_	Case=Nom|Number=Sing	3	nmod	_	_
2	Francisco'dan	francisco	PROPN	_	Case=Abl|Number=Sing	1	flat	_	_
3	Atlanta'ya	atlanta	PROPN	_	Case=Dat|Number=Sing	9	nmod	_	_
4	sabah	sabah	NOUN	_	Case=Nom|Number=Sing|Person=3	5	nmod	_	_
5	8'den	8	NOUN	_	Case=Abl|Number=Sing|Person=3	7	obl	_	_
6	önce	önce	ADP	_	_	5	case	_	_
7	kalkan	kalk	ADJ	_	_	9	acl	_	_
8	bir	bir	DET	_	Definite=Ind|PronType=Art	9	det	_	_
9	uçuş	uç	NOUN	_	Case=Nom|Number=Sing|Person=3	13	dislocated	_	_
10	böyle	böyle	ADV	_	_	12	advmod	_	_
11	bir	bir	DET	_	Definite=Ind|PronType=Art	12	det	_	_
12	uçuş	uç	NOUN	_	Case=Nom|Number=Sing|Person=3	13	nsubj	_	_
13	var	var	ADJ	_	_	0	root	_	_
14	mı	mi	AUX	_	PronType=Int	13	aux	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 1 dislocated	color:blue
1	lütfen	lütfen	ADV	_	_	23	dislocated	_	_
2	United	united	PROPN	_	Case=Nom|Number=Sing	11	nmod	_	_
3	havayolları	havayol	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	2	flat	_	_
4	ve	ve	CCONJ	_	_	5	cc	_	_
5	Northwest	Northwest	PROPN	_	Case=Nom|Number=Sing	2	conj	_	_
6	havayolları	havayol	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	5	flat	_	_
7	ile	ile	ADP	_	_	2	case	_	_
8	Denver'e	denver	PROPN	_	Case=Dat|Number=Sing	9	obl	_	_
9	giden	git	ADJ	_	_	11	acl	_	_
10	tüm	tüm	DET	_	PronType=Art	11	det	_	_
11	uçuşları	uç	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	23	obj	_	_
12	ve	ve	CCONJ	_	_	22	cc	_	_
13	Northwest	Northwest	PROPN	_	Case=Nom|Number=Sing	22	nmod	_	_
14	havayolları	havayol	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	13	flat	_	_
15	ve	ve	CCONJ	_	_	16	cc	_	_
16	United	united	PROPN	_	Case=Nom|Number=Sing	13	conj	_	_
17	havayolları	havayol	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	16	flat	_	_
18	Denver'den	denver	PROPN	_	Case=Abl|Number=Sing	20	obl	_	_
19	yola	yol	NOUN	_	Case=Dat|Number=Sing|Person=3	20	compound	_	_
20	çıkan	çık	ADJ	_	_	22	acl	_	_
21	tüm	tüm	DET	_	PronType=Art	22	det	_	_
22	uçuşları	uç	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	11	conj	_	_
23	listeleyin	listele	VERB	_	Mood=Imp|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


