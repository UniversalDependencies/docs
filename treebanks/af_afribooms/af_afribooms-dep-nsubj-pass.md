---
layout: base
title:  'Statistics of nsubj:pass in UD_Afrikaans-AfriBooms'
udver: '2'
---

## Treebank Statistics: UD_Afrikaans-AfriBooms: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="af_afribooms-dep-nsubj.html">nsubj</a></tt>.

513 nodes (1%) are attached to their parents as `nsubj:pass`.

513 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.4327485380117.

The following 6 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="af_afribooms-pos-VERB.html">VERB</a></tt>-<tt><a href="af_afribooms-pos-PRON.html">PRON</a></tt> (289; 56% instances), <tt><a href="af_afribooms-pos-VERB.html">VERB</a></tt>-<tt><a href="af_afribooms-pos-NOUN.html">NOUN</a></tt> (217; 42% instances), <tt><a href="af_afribooms-pos-VERB.html">VERB</a></tt>-<tt><a href="af_afribooms-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="af_afribooms-pos-VERB.html">VERB</a></tt>-<tt><a href="af_afribooms-pos-SYM.html">SYM</a></tt> (2; 0% instances), <tt><a href="af_afribooms-pos-VERB.html">VERB</a></tt>-<tt><a href="af_afribooms-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="af_afribooms-pos-ADV.html">ADV</a></tt>-<tt><a href="af_afribooms-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 nsubj:pass	color:blue
1	Let	let	VERB	VTHOO	Subcat=Intr|Tense=Pres|VerbForm=Fin,Inf	4	dep	_	_
2	wel	wel	ADV	BS	Degree=Pos	1	advmod	_	SpaceAfter=No
3	:	:	PUNCT	ZM	_	2	punct	_	_
4	dit	dit	PRON	PDOENP	Case=Nom|Number=Sing|Person=3|PronType=Prs	7	nsubj:pass	_	_
5	word	word	AUX	VTUOP	Tense=Pres|VerbForm=Fin,Inf|VerbType=Pas	7	aux:pass	_	_
6	slegs	slegs	ADV	BS	Degree=Pos	7	advmod	_	_
7	gedoen	doen	VERB	VVHOG	Subcat=Tran|Tense=Past|VerbForm=Part	0	root	_	_
8	indien	indien	SCONJ	KO	_	7	amod	_	_
9	jy	jy	PRON	PTENP	Case=Nom|Number=Sing|Person=2|PronType=Prs	11	nsubj	_	_
10	daartoe	daartoe	PRON	PB	PronType=Rel	11	obj	_	_
11	instem	instem	VERB	VTHSO	Subcat=Intr|Tense=Pres|VerbForm=Fin,Inf	8	dep	_	SpaceAfter=No
12	.	.	PUNCT	ZE	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 nsubj:pass	color:blue
1	Hierdie	hierdie	DET	PA	PronType=Dem	2	det	_	_
2	webwerf	webwerf	NOUN	NSE	Number=Sing	7	nsubj:pass	_	_
3	word	word	AUX	VTUOP	Tense=Pres|VerbForm=Fin,Inf|VerbType=Pas	7	aux:pass	_	_
4	"	"	PUNCT	ZPL	_	5	punct	_	SpaceAfter=No
5	voetstoots	voetstoots	ADV	BS	Degree=Pos	7	advmod	_	SpaceAfter=No
6	"	"	PUNCT	ZPR	_	7	punct	_	_
7	aangebied	aanbied	VERB	VVHOG	Subcat=Tran|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
8	.	.	PUNCT	ZE	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 nsubj:pass	color:blue
1	Ons	ons	PRON	PEMP	Case=Acc,Nom|Number=Plur|Person=1|PronType=Prs	2	nsubj	_	_
2	weet	weet	VERB	VTHOG	Subcat=Tran|Tense=Pres|VerbForm=Fin,Inf	0	root	_	_
3	ook	ook	ADV	BS	Degree=Pos	2	advmod	_	_
4	dat	dat	SCONJ	KO	_	2	amod	_	_
5	Suid-Afrika	Suid-Afrika	PROPN	NEE	Number=Sing	8	nsubj:pass	_	_
6	veel	veel	ADV	BS	Degree=Pos	8	advmod	_	_
7	minder	min	ADV	BV	Degree=Cmp	8	advmod	_	_
8	geraak	raak	VERB	VVHOG	Subcat=Tran|Tense=Past|VerbForm=Part	2	dep	_	_
9	word	word	AUX	VTUOP	Tense=Pres|VerbForm=Fin,Inf|VerbType=Pas	8	aux:pass	_	_
10	as	as	SCONJ	KO	_	8	amod	_	_
11	baie	baie	DET	THAO	PronType=Ind	13	det	_	_
12	ander	ander	ADJ	ASA	AdjType=Attr|Case=Nom|Degree=Pos	13	amod	_	_
13	lande	land	NOUN	NSM	Number=Plur	8	dep	_	SpaceAfter=No
14	.	.	PUNCT	ZE	_	13	punct	_	_

~~~


