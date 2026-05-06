---
layout: base
title:  'Statistics of flat:name in UD_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Turkish-BOUN: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="tr_boun-dep-flat.html">flat</a></tt>.

2 nodes (0%) are attached to their parents as `flat:name`.

2 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `flat:name`: <tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 26 flat:name	color:blue
1	CHP	CHP	PROPN	Abr	Case=Nom|Number=Sing|Person=3	2	nmod:poss	_	_
2	milletvekillerinin	milletvekil	NOUN	_	Case=Gen|Number=Plur|Number[psor]=Plur|Person=3|Person[psor]=3	19	nsubj	_	_
3	duruşma	duruşma	VERB	_	Case=Nom|Number=Sing|Person=3	4	nmod:poss	_	_
4	salonunda	salon	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	6	obl	_	_
5	izleyicilere	izleyici	NOUN	_	Case=Dat|Number=Plur|Person=3	6	obl	_	_
6	ayrılmış	ayır	VERB	Ptcp	Evident=Nfh|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	8	acl	_	_
7	olan	ol	AUX	Ptcp	Polarity=Pos|Tense=Pres|VerbForm=Part	6	aux	_	_
8	sıralardan	sıra	NOUN	_	Case=Abl|Number=Plur|Person=3	9	nmod	_	_
9	takip	takip	NOUN	_	Case=Nom|Number=Sing|Person=3	11	nmod:poss	_	_
10	etme	et	VERB	Vnoun	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	9	compound	_	_
11	imkânına	imkân	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	19	obl	_	_
12	rağmen	rağmen	ADP	PCDat	_	11	case	_	SpaceAfter=No
13	,	,	PUNCT	Comma	_	19	punct	_	_
14	özellikle	özellikle	ADV	_	_	19	advmod	_	_
15	sanık	sanık	ADJ	Adj	_	16	amod	_	_
16	müdafilerine	müdafi	NOUN	_	Case=Dat|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	17	obl	_	_
17	ayrılmış	ayrıl	VERB	_	Evident=Nfh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	18	acl	_	_
18	sıralarda	sıra	NOUN	_	Case=Loc|Number=Plur|Person=3	19	obl	_	_
19	oturduklarını	otur	VERB	Ptcp	Aspect=Perf|Case=Acc|Number=Plur|Number[psor]=Plur|Person=3|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	20	ccomp	_	_
20	dile	dil	ADP	PCNom	Case=Dat|Number=Sing|Person=3	23	acl	_	_
21	getiren	getir	VERB	Ptcp	Polarity=Pos|Tense=Pres|VerbForm=Part	20	compound	_	_
22	Savcı	savcı	NOUN	_	Case=Nom|Number=Sing|Person=3	23	nmod	_	_
23	Pekgüzel	Pekgüzel	ADJ	Adj	_	33	nsubj	_	SpaceAfter=No
24	,	,	PUNCT	Comma	_	33	punct	_	_
25	Şahin	şahin	PROPN	_	Case=Nom|Number=Sing|Person=3	28	obj	_	_
26	Mengü'yü	Mengü	NOUN	_	Case=Acc|Number=Sing|Person=3	25	flat:name	_	_
27	de	de	PART	Emph	_	26	advmod:emph	_	_
28	kastederek	kastet	VERB	Conv	Mood=Imp|Polarity=Pos|VerbForm=Conv	33	advcl	_	_
29	istemini	istem	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	33	obj	_	_
30	tutanaklara	tutanak	NOUN	_	Case=Dat|Number=Plur|Person=3	33	obl	_	_
31	şu	şu	DET	Det	PronType=Dem	32	det	_	_
32	sözlerle	söz	NOUN	_	Case=Ins|Number=Plur|Person=3	33	obl	_	_
33	geçirdi	geçir	VERB	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
34	:	:	PUNCT	Punc	_	33	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:name	color:blue
1	Osman	Osman	PROPN	_	Case=Nom|Number=Sing|Person=3	3	nsubj	_	_
2	Paşa	paşa	PROPN	_	Case=Acc|Number=Sing|Person=3	1	flat:name	_	_
3	diyor	de	VERB	_	Aspect=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	0	root	_	_
4	ki	ki	SCONJ	_	_	3	mark	_	_
5	"	"	PUNCT	Punc	_	8	punct	_	SpaceAfter=No
6	Ben	ben	PRON	Pers	Case=Nom|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	_
7	planı	plan	NOUN	_	Case=Acc|Number=Sing|Person=3	8	obj	_	_
8	yaparım	yap	VERB	_	Aspect=Hab|Number=Sing|Person=1|Polarity=Pos|Tense=Pres	3	ccomp	_	SpaceAfter=No
9	,	,	PUNCT	Comma	_	8	punct	_	_
10	hedefleri	hedef	NOUN	_	Case=Acc|Number=Plur|Person=3	11	obj	_	_
11	gösterir	göster	VERB	_	Aspect=Hab|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	8	conj	_	_
12	tabur	tabur	NOUN	_	Case=Nom|Number=Sing|Person=3	13	nmod:poss	_	_
13	komutanına	komutan	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	14	obl	_	_
14	veririm	ver	VERB	_	Aspect=Hab|Number=Sing|Person=1|Polarity=Pos|Tense=Pres	11	conj	_	_
15	o	o	DET	Det	PronType=Dem	19	nsubj	_	_
16	inisiyatifiyle	inisiyatif	NOUN	_	Case=Ins|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	19	obl	_	_
17	istediği	iste	VERB	Ptcp	Aspect=Perf|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	18	acl	_	_
18	yere	yer	NOUN	_	Case=Dat|Number=Sing|Person=3	19	obl	_	_
19	yürür	yürü	VERB	_	Aspect=Hab|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	8	conj	_	SpaceAfter=No
20	"	"	PUNCT	Punc	_	8	punct	_	SpacesAfter=\n

~~~


