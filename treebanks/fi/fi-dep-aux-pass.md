---
layout: base
title:  'Statistics of aux:pass in UD_Finnish'
udver: '2'
---

## Treebank Statistics: UD_Finnish: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="fi-dep-aux.html">aux</a></tt>.

760 nodes (0%) are attached to their parents as `aux:pass`.

757 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33026315789474.

The following 3 pairs of parts of speech are connected with `aux:pass`: <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-AUX.html">AUX</a></tt> (752; 99% instances), <tt><a href="fi-pos-ADV.html">ADV</a></tt>-<tt><a href="fi-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="fi-pos-AUX.html">AUX</a></tt>-<tt><a href="fi-pos-AUX.html">AUX</a></tt> (4; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux:pass	color:blue
1	Syytä	syy	NOUN	N	Case=Par|Number=Sing	10	obj	_	_
2	sille	se	PRON	Pron	Case=All|Number=Sing|PronType=Dem	1	nmod	_	SpaceAfter=No
3	,	,	PUNCT	Punct	_	7	punct	_	_
4	miksi	miksi	ADV	Adv	_	7	advmod	_	_
5	minut	minä	PRON	Pron	Case=Acc|Number=Sing|Person=1|PronType=Prs	7	obj	_	_
6	oli	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	aux:pass	_	_
7	suodatettu	suodattaa	VERB	V	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	2	ccomp	_	SpaceAfter=No
8	,	,	PUNCT	Punct	_	7	punct	_	_
9	en	ei	AUX	V	Number=Sing|Person=1|Polarity=Neg|VerbForm=Fin|Voice=Act	10	aux	_	_
10	tiedä	tietää	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
11	.	.	PUNCT	Punct	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux:pass	color:blue
1	Nyt	nyt	ADV	Adv	_	3	advmod	_	_
2	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux:pass	_	_
3	täällä	täällä	ADV	Adv	_	0	root	_	_
4	oltu	olla	AUX	V	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	3	cop	_	_
5	3,5	3,5	NUM	Num	NumType=Card	6	nummod	_	_
6	kk	kuu#kausi	NOUN	N	Abbr=Yes|Case=Par|Number=Sing	3	obl	_	_
7	ja	ja	CCONJ	C	_	8	cc	_	_
8	edessä	edessä	ADV	Adv	_	3	conj	_	_
9	enää	enää	ADV	Adv	_	8	advmod	_	_
10	reilu	reilu	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	11	amod	_	_
11	kuukausi	kuu#kausi	NOUN	N	Case=Nom|Number=Sing	8	nsubj:cop	_	SpaceAfter=No
12	.	.	PUNCT	Punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 aux:pass	color:blue
1	-	-	PUNCT	Punct	_	7	punct	4.1:punct	_
2	"	"	PUNCT	Punct	_	3	punct	_	SpaceAfter=No
3	perävaunuyhdistelmällä	perä#vaunu#yhdistelmä	NOUN	N	Case=Ade|Number=Sing	7	orphan	4.1:obl	SpaceAfter=No
4	"	"	PUNCT	Punct	_	3	punct	_	_
4.1	tarkoitetaan	tarkoittaa	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	_	_	_	_
5	tavarakuljetukseen	tavara#kuljetus	NOUN	N	Case=Ill|Number=Sing	6	obl	_	_
6	tarkoitettua	tarkoittaa	VERB	V	Case=Par|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	7	acl	_	_
7	moottoriajoneuvoa	moottori#ajo#neuvo	NOUN	N	Case=Par|Number=Sing	0	root	4.1:obj	SpaceAfter=No
8	,	,	PUNCT	Punct	_	11	punct	_	_
9	johon	joka	PRON	Pron	Case=Ill|Number=Sing|PronType=Rel	11	obl	_	_
10	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	aux:pass	_	_
11	kytketty	kytkeä	VERB	V	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	7	acl:relcl	_	_
12	varsinainen	varsinainen	ADJ	A	Case=Nom|Degree=Pos|Derivation=Inen|Number=Sing	11	obj	_	_
13	tai	tai	CCONJ	C	_	14	cc	_	_
14	keskiakseliperävaunu	keski#akseli#perä#vaunu	NOUN	N	Case=Nom|Number=Sing	12	conj	11:obj	SpaceAfter=No
15	.	.	PUNCT	Punct	_	7	punct	4.1:punct	_

~~~


