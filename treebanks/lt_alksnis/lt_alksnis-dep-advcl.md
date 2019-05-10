---
layout: base
title:  'Statistics of advcl in UD_Lithuanian-ALKSNIS'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-ALKSNIS: Relations: `advcl`

This relation is universal.

380 nodes (1%) are attached to their parents as `advcl`.

264 instances of `advcl` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.58684210526316.

The following 10 pairs of parts of speech are connected with `advcl`: <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (264; 69% instances), <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (52; 14% instances), <tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (19; 5% instances), <tt><a href="lt_alksnis-pos-ADV.html">ADV</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (11; 3% instances), <tt><a href="lt_alksnis-pos-PART.html">PART</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (11; 3% instances), <tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (8; 2% instances), <tt><a href="lt_alksnis-pos-NUM.html">NUM</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (7; 2% instances), <tt><a href="lt_alksnis-pos-DET.html">DET</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="lt_alksnis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 advcl	color:blue
1	Viso	visas	DET	Pgmsgn	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing|PronType=Tot	2	det	2:det	_
2	to	tas	DET	Pgmsgn	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing|PronType=Dem	3	obj	3:obj	_
3	išvengti	išvengti	VERB	Vgi-----n--n--	Polarity=Pos|VerbForm=Inf	0	root	0:root	_
4	nusprendus	nuspręsti	VERB	Vgaa----n--n--	Polarity=Pos|Tense=Past|VerbForm=Ger	3	advcl	3:advcl	_
5	dirbti	dirbti	VERB	Vgi-----n--n--	Polarity=Pos|VerbForm=Inf	4	xcomp	4:xcomp	_
6	namuose	namai	NOUN	Ncmpln-	Case=Loc|Gender=Masc|Number=Plur	5	obl	5:obl	SpaceAfter=No
7	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 advcl	color:blue
1	tinkamą	tinkamas	ADJ	Agpfsan	Case=Acc|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	2	amod	2:amod	_
2	padėtį	padėtis	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	0	root	0:root	_
3	sėdėdami	sėdėti	VERB	Vgh--pm-n--n--	Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Conv	2	advcl	2:advcl	_
4	prie	prie	ADP	Sgg	AdpType=Prep|Case=Gen	5	case	5:case	_
5	stalo	stalas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	3	obl	3:obl	SpaceAfter=No
6	;	;	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 advcl	color:blue
1	Vasario	vasaris	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	2	nmod	2:nmod	_
2	16-ąją	16-as	ADJ	Mofsamn	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing|NumForm=Combi|NumType=Ord	0	root	0:root	_
3	gidai	gidas	NOUN	Ncmpnn-	Case=Nom|Gender=Masc|Number=Plur	2	nsubj	2:nsubj	_
4	turistus	turistas	NOUN	Ncmpan-	Case=Acc|Gender=Masc|Number=Plur	2	nmod	2:nmod	_
5	apžiūrėti	apžiūrėti	VERB	Vgi-----n--n--	Polarity=Pos|VerbForm=Inf	2	advcl	2:advcl	_
6	Šv	šv.	X	Ys	Abbr=Yes	8	nmod	8:nmod	SpaceAfter=No
7	.	.	PUNCT	Z	_	6	punct	6:punct	_
8	Onos	Ona	PROPN	Npfsgnf	Case=Gen|Gender=Fem|NameType=Giv|Number=Sing	11	nmod	11:nmod	_
9	ir	ir	CCONJ	Cg	_	10	cc	10:cc	_
10	Bernardinų	bernardinas	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	8	conj	8:conj|11:nmod	_
11	bažnyčias	bažnyčia	NOUN	Ncfpan-	Case=Acc|Gender=Fem|Number=Plur	5	obj	5:obj	SpaceAfter=No
12	.	.	PUNCT	Z	_	2	punct	2:punct	_

~~~


