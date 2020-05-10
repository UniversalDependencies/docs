---
layout: base
title:  'Statistics of advmod in UD_Old_French-SRCMF'
udver: '2'
---

## Treebank Statistics: UD_Old_French-SRCMF: Relations: `advmod`

This relation is universal.
There are 1 language-specific subtypes of `advmod`: <tt><a href="fro_srcmf-dep-advmod-obl.html">advmod:obl</a></tt>.

16669 nodes (10%) are attached to their parents as `advmod`.

13104 instances of `advmod` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.13216149739037.

The following 13 pairs of parts of speech are connected with `advmod`: <tt><a href="fro_srcmf-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_srcmf-pos-ADV.html">ADV</a></tt> (13429; 81% instances), <tt><a href="fro_srcmf-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fro_srcmf-pos-ADV.html">ADV</a></tt> (1512; 9% instances), <tt><a href="fro_srcmf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fro_srcmf-pos-ADV.html">ADV</a></tt> (779; 5% instances), <tt><a href="fro_srcmf-pos-ADV.html">ADV</a></tt>-<tt><a href="fro_srcmf-pos-ADV.html">ADV</a></tt> (703; 4% instances), <tt><a href="fro_srcmf-pos-PRON.html">PRON</a></tt>-<tt><a href="fro_srcmf-pos-ADV.html">ADV</a></tt> (203; 1% instances), <tt><a href="fro_srcmf-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fro_srcmf-pos-ADV.html">ADV</a></tt> (17; 0% instances), <tt><a href="fro_srcmf-pos-DET.html">DET</a></tt>-<tt><a href="fro_srcmf-pos-ADV.html">ADV</a></tt> (8; 0% instances), <tt><a href="fro_srcmf-pos-ADP.html">ADP</a></tt>-<tt><a href="fro_srcmf-pos-ADV.html">ADV</a></tt> (7; 0% instances), <tt><a href="fro_srcmf-pos-AUX.html">AUX</a></tt>-<tt><a href="fro_srcmf-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="fro_srcmf-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="fro_srcmf-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="fro_srcmf-pos-NUM.html">NUM</a></tt>-<tt><a href="fro_srcmf-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="fro_srcmf-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_srcmf-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="fro_srcmf-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_srcmf-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 advmod	color:blue
1	N'	_	ADV	ADVneg	Polarity=Neg	3	advmod	_	_
2	i	_	ADV	PROadv	PronType=Dem	3	obl	_	_
3	ad	_	VERB	VERcjg	VerbForm=Fin	0	root	_	_
4	castel	_	NOUN	NOMcom	_	3	obj	_	_
5	ki	_	PRON	PROrel	PronType=Prs,Rel	8	nsubj	_	_
6	devant	_	ADP	PRE	_	7	case	_	_
7	lui	_	PRON	PROper	PronType=Prs	8	obl	_	_
8	remaigne	_	VERB	VERcjg	VerbForm=Fin	4	acl:relcl	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod	color:blue
1	Blancandrins	_	PROPN	NOMpro	_	2	nsubj	_	_
2	fut	_	VERB	VERcjg	VerbForm=Fin	0	root	_	_
3	des	_	ADP	PRE.DETdef	Definite=Def|PronType=Art	6	case:det	_	_
4	plus	_	ADV	ADVgen	_	5	advmod	_	_
5	saives	_	ADJ	ADJqua	_	6	amod	_	_
6	paiens	_	NOUN	NOMcom	_	2	obl	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod	color:blue
1	De	_	ADP	PRE	_	2	case	_	_
2	vasselage	_	NOUN	NOMcom	_	5	obl	_	_
3	fut	_	AUX	VERcjg	VerbForm=Fin	5	cop	_	_
4	asez	_	ADV	ADVgen	_	5	advmod	_	_
5	chevaler	_	NOUN	NOMcom	_	0	root	_	_

~~~


