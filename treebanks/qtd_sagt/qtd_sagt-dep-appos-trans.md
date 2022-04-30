---
layout: base
title:  'Statistics of appos:trans in UD_Turkish_German-SAGT'
udver: '2'
---

## Treebank Statistics: UD_Turkish_German-SAGT: Relations: `appos:trans`

This relation is a language-specific subtype of <tt><a href="qtd_sagt-dep-appos.html">appos</a></tt>.

32 nodes (0%) are attached to their parents as `appos:trans`.

32 instances of `appos:trans` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.59375.

The following 7 pairs of parts of speech are connected with `appos:trans`: <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (18; 56% instances), <tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt>-<tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> (8; 25% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (2; 6% instances), <tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="qtd_sagt-pos-NUM.html">NUM</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="qtd_sagt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 appos:trans	color:blue
1	Und	und	CCONJ	_	_	3	cc	_	CSID=DE|Lang=de
2	dann	dann	ADV	_	_	3	advmod	_	CSID=DE|Lang=de
3	liegt	liegen	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	CSID=DE|Lang=de
4	der	der	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	3	nsubj	_	CSID=DE|Lang=de
5	weiter	weiter	ADV	_	_	3	advmod	_	CSID=DE|Lang=de
6	so	so	ADV	_	_	3	advmod	_	CSID=DE|Lang=de
7	fıkra	fıkra	NOUN	_	Case=Nom|Number=Sing	8	obj	_	CSID=TR|Lang=tr
8	anlatıyor	anlat	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	conj	_	CSID=TR|Lang=tr
9	so	so	ADV	_	_	11	advmod	_	CSID=DE|Lang=de
10	als	als	ADP	_	_	11	case	_	CSID=DE|Lang=de
11	Witz	Witz	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	7	appos:trans	_	CSID=DE|Lang=de|SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	_	CSID=OTHER

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 appos:trans	color:blue
1	Zamanında	zaman	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	obl	_	CSID=TR|Lang=tr
2	o	o	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	CSID=TR|Lang=tr
3	der	der	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	2	appos:trans	_	CSID=DE|Lang=de
4	war	sein	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	cop	_	CSID=DE|Lang=de
5	besser	gut	ADJ	_	_	0	root	_	CSID=DE|Lang=de
6	als	als	ADP	_	_	7	case	_	CSID=DE|Lang=de
7	Christiano	Christiano	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	5	obl	_	CSID=DE|Lang=de
8	Ronaldo	Ronaldo	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	7	flat	_	CSID=DE|Lang=de|SpaceAfter=No
9	.	.	PUNCT	_	_	7	punct	_	CSID=OTHER

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 20 appos:trans	color:blue
1	Düşün	düşün	VERB	_	Mood=Imp|Number=Sing|Person=2	10	parataxis:discourse	_	CSID=TR|Lang=tr|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	CSID=OTHER
3	iki	iki	NUM	_	NumType=Card	5	nummod	_	CSID=TR|Lang=tr
4	bin	bin	NUM	_	NumType=Card	5	nummod	_	CSID=TR|Lang=tr
5	yıl	yıl	NOUN	_	Case=Nom|Number=Sing	10	obl	_	CSID=TR|Lang=tr
6	önce	önce	ADP	_	_	5	case	_	CSID=TR|Lang=tr
7	adamlar	adam	NOUN	_	Case=Nom|Number=Plur	10	nsubj	_	CSID=TR|Lang=tr
8	bir	bir	DET	_	Definite=Ind	9	det	_	CSID=TR|Lang=tr
9	şeyler	şey	NOUN	_	Case=Nom|Number=Plur	10	obj	_	CSID=TR|Lang=tr
10	yazıyor	yaz	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	CSID=TR|Lang=tr|SpaceAfter=No
11	,	,	PUNCT	_	_	24	punct	_	CSID=OTHER
12	yanına	yan	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=3	24	obl	_	CSID=TR|Lang=tr
13	herifin	herif	NOUN	_	Case=Gen|Number=Sing	14	nmod	_	CSID=TR|Lang=tr
14	birisi	biri	PRON	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	24	nsubj	_	CSID=TR|Lang=tr
15	so	so	INTJ	_	_	18	discourse	_	CSID=TR|Lang=tr
16	so	so	INTJ	_	_	18	discourse	_	CSID=DE|Lang=de
17	joke	joke	NOUN	_	Foreign=Yes	18	xcomp	_	CSID=LANG3|Lang=en
18	olarak	ol	VERB	_	VerbForm=Conv	24	advcl	_	CSID=TR|Lang=tr
19	als	als	ADP	_	_	20	case	_	CSID=DE|Lang=de
20	Spaß	Spaß	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	18	appos:trans	_	CSID=DE|Lang=de
21	so	so	ADV	_	_	23	advmod	_	CSID=DE|Lang=de
22	cinsel	cinsel	ADJ	_	_	23	amod	_	CSID=TR|Lang=tr
23	organ	organ	NOUN	_	Case=Nom|Number=Sing	24	obj	_	CSID=TR|Lang=tr
24	çiziyor	çiz	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Pres	10	conj	_	CSID=TR|Lang=tr|SpaceAfter=No
25	.	.	PUNCT	_	_	10	punct	_	CSID=OTHER

~~~


