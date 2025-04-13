---
layout: base
title:  'Statistics of flat:name in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="orv_rnc-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="orv_rnc-dep-flat-foreign.html">flat:foreign</a></tt>.

3556 nodes (2%) are attached to their parents as `flat:name`.

3556 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.27699662542182.

The following 11 pairs of parts of speech are connected with `flat:name`: <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (3291; 93% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (145; 4% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (78; 2% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (19; 1% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (7; 0% instances), <tt><a href="orv_rnc-pos-PART.html">PART</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (5; 0% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 flat:name	color:blue
1	И	и	CCONJ	_	_	5	cc	_	wf="И"|_
2	всего	всего	ADV	_	Degree=Pos|PronType=Tot	3	advmod	_	upos="ADVPRO"|wf="всего"|_
3	меди	мѣдь	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	5	nsubj	_	wf="меди"|_
4	23	23	NUM	_	Case=Nom|NumForm=Digit|NumType=Card	5	nummod:gov	_	wf="23"|_
5	фунта	фунтъ	NOUN	_	Case=Nom|Gender=Masc|Number=Count	0	root	_	wf="фунта"|_
6	3	3	NUM	_	Case=Nom|NumForm=Digit|NumType=Card	7	nummod:gov	_	wf="3"|_
7	чети	четь	NOUN	_	Case=Nom|Gender=Fem|Number=Count	5	nmod	_	wf="чети"|SpaceAfter=No
8	,	,	PUNCT	_	_	10	punct	_	wf=","|_
9	оприч(ь)	опричь	ADP	_	_	10	case	_	wf="опричь"|_
10	блюда	блюдо	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	5	nmod	_	wf="блюда"|_
11	Федора	Федоръ	PROPN	_	Case=Gen|Gender=Masc|NameType=Giv|Number=Sing	10	nmod	_	wf="Федора"|_
12	Ил(ь)ича	Ильичь	PROPN	_	Case=Gen|Gender=Masc|NameType=Pat|Number=Sing	11	flat:name	_	wf="Ильича"|SpaceAfter=No
13	.	.	PUNCT	_	_	5	punct	_	wf="."|_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 flat:name	color:blue
1	А	а	CCONJ	_	_	5	cc	_	norm="А"
2	сю	сей	DET	_	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	3	det	_	norm="сю"|Decl=X|End=ю|check=@
3	грамоту	грамота	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	5	obj	_	norm="грамоту"|Decl=1a|End=у|check=@
4	меновную	мѣновный	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	3	amod	_	norm="меновную"|Decl=X|End=юу|check=@
5	писал	писати	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	norm="писал"|Decl=X|End=л
6	Иван	Иванъ	PROPN	_	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	5	nsubj	_	norm="Иван"|Decl=2|End=0|[G]
7	Петров	Петровъ	PROPN	_	Case=Nom|Gender=Masc|NameType=Pat|Number=Sing	6	flat:name	_	norm="Петров"|Decl=Poss|End=0|[G]
8	сын	сынъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	6	flat:name	_	norm="сын"|Decl=2|End=0|[G]
9	Спячева	Спячевъ	PROPN	_	Case=Gen|Gender=Masc|NameType=Sur|Number=Sing	6	flat:name	_	norm="Спячева"|Decl=Poss|End=а|SpaceAfter=No
10	.	.	PUNCT	_	_	5	punct	_	norm="."

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 flat:name	color:blue
1	На	на	ADP	_	_	3	case	_	_
2	Олешкине	олешкинъ	ADJ	_	Case=Loc|Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	3	amod	_	_
3	жеребью	жеребей	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	5	obl	_	_
4	Дементьева	Дементьевъ	PROPN	_	Case=Gen|Gender=Masc|NameType=Sur|Number=Sing	2	flat:name	_	_
5	умолочено	умолотити	VERB	_	Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
6	ржи	рожь	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	7	nmod	_	_
7	четь	четь	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	5	nsubj:pass	_	SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	_

~~~


