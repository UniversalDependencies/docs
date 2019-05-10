---
layout: base
title:  'Statistics of xcomp in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `xcomp`

This relation is universal.

485 nodes (1%) are attached to their parents as `xcomp`.

336 instances of `xcomp` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.60618556701031.

The following 13 pairs of parts of speech are connected with `xcomp`: <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (210; 43% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (118; 24% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (72; 15% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (62; 13% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (7; 1% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt> (6; 1% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="hy_armtdp-pos-AUX.html">AUX</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="hy_armtdp-pos-AUX.html">AUX</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 xcomp	color:blue
1	Հայրիկը	հայրիկ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	2	nsubj	_	Translit=hayrikë|LTranslit=hayrik
2	խմում	խմել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	Translit=xmowm|LTranslit=xmel
3	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	aux	_	Translit=ē|LTranslit=em|SpaceAfter=No
4	,	,	PUNCT	_	_	7	punct	_	Translit=,|LTranslit=,
5	որովհետև	որովհետև	SCONJ	_	_	7	mark	_	Translit=orovhetew|LTranslit=orovhetew
6	չի	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	7	aux	_	Translit=či|LTranslit=em
7	կարողանում	կարողանալ	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	2	advcl	_	Translit=karoġanowm|LTranslit=karoġanal
8	չխմել	խմել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	7	xcomp	_	Translit=čxmel|LTranslit=xmel|SpaceAfter=No
9	:	:	PUNCT	_	_	2	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 xcomp	color:blue
1	Միակ	միակ	ADV	_	_	2	advmod:emph	_	Translit=miak|LTranslit=miak
2	վայրն	վայր	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	0	root	_	Translit=vayrn|LTranslit=vayr
3	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	cop	_	Translit=ē|LTranslit=em
4	որտեղ	որտեղ	ADV	_	PronType=Rel	9	advmod	_	Translit=orteġ|LTranslit=orteġ
5	ես	ես	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nsubj	_	Translit=es|LTranslit=es
6	ինձ	ես	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	9	iobj	_	Translit=inj|LTranslit=es
7	մարդ	մարդ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	9	xcomp	_	Translit=mard|LTranslit=mard
8	եմ	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	9	aux	_	Translit=em|LTranslit=em
9	զգում	զգալ	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	2	acl:relcl	_	Translit=zgowm|LTranslit=zgal|SpaceAfter=No
10	,	,	PUNCT	_	_	11	punct	_	Translit=,|LTranslit=,
11	ասում	ասել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	2	parataxis	_	Translit=asowm|LTranslit=asel
12	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	11	aux	_	Translit=ē|LTranslit=em
13	նա	նա	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	Translit=na|LTranslit=na|SpaceAfter=No
14	:	:	PUNCT	_	_	2	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 xcomp	color:blue
1	Տարբեր	տարբեր	ADJ	_	Degree=Pos	2	amod	_	Translit=tarber|LTranslit=tarber
2	տնտեսագետներ	տնտեսագետ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Plur	3	nsubj	_	Translit=tntesagetner|LTranslit=tntesaget
3	կարող	կարող	ADJ	_	Degree=Pos	0	root	_	Translit=karoġ|LTranslit=karoġ
4	են	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	cop	_	Translit=en|LTranslit=em
5	անվերջ	անվերջ	ADV	_	_	6	advmod	_	Translit=anverǰ|LTranslit=anverǰ
6	վիճել	վիճել	VERB	_	Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	3	xcomp	_	Translit=vič̣el|LTranslit=vič̣el
7	այդ	այդ	DET	_	Distance=Med|PronType=Dem	8	det	_	Translit=ayd|LTranslit=ayd
8	հարցի	հարց	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	6	obl	_	Translit=harc’i|LTranslit=harc’
9	շուրջ	շուրջ	ADP	_	AdpType=Post	8	case	_	Translit=šowrǰ|LTranslit=šowrǰ|SpaceAfter=No
10	:	:	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.

~~~


