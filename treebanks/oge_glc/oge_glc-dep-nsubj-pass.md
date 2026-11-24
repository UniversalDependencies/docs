---
layout: base
title:  'Statistics of nsubj:pass in UD_Old_Georgian-GLC'
udver: '2'
---

## Treebank Statistics: UD_Old_Georgian-GLC: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="oge_glc-dep-nsubj.html">nsubj</a></tt>.

55 nodes (0%) are attached to their parents as `nsubj:pass`.

28 instances of `nsubj:pass` (51%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.96363636363636.

The following 7 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="oge_glc-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_glc-pos-NOUN.html">NOUN</a></tt> (31; 56% instances), <tt><a href="oge_glc-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_glc-pos-PRON.html">PRON</a></tt> (16; 29% instances), <tt><a href="oge_glc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="oge_glc-pos-NOUN.html">NOUN</a></tt> (3; 5% instances), <tt><a href="oge_glc-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_glc-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="oge_glc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="oge_glc-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="oge_glc-pos-AUX.html">AUX</a></tt>-<tt><a href="oge_glc-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="oge_glc-pos-PRON.html">PRON</a></tt>-<tt><a href="oge_glc-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
1	ხოლო	ხოლო	CCONJ	Conj	_	4	cc	_	Translit=xolo
2	ძუალი	ძუალი	NOUN	Noun	Case=Nom|Number=Sing	4	nsubj:pass	_	Translit=ʒuali
3	არა	არა	PART	Part	PartType=Neg	4	advmod:neg	_	Translit=ara
4	შეიმუსროს	შემუსრვა	VERB	Verb	Aspect=Imp|Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	Translit=šeimusros
5	ო	თქო	PART	Part	Evident=Nfh	4	ccomp	_	Translit=o
6	მის	იგი	PRON	Pron	Case=Gen|Number=Sing|Person=3|PronType=Dem	4	obl	_	Translit=mis
7	გან	გან	ADP	Post	AdpType=Post|Case=Gen	6	case	_	Translit=gan
8	.	.	PUNCT	F	PunctType=Peri	4	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 nsubj:pass	color:blue
1	აწ	აწ	ADV	Adv	AdvType=Tim	8	advmod	_	Translit=ac
2	უკუე	უკუე	ADV	Adv	AdvType=Man	8	advmod	_	Translit=ukue
3	ვინცა	ვინ	PRON	Pron	Case=Nom|Number=Sing|PartType=Emp|PronType=Rel	8	nsubj	_	Translit=vincʻa
4	მოყუასთა	მოყუასი	NOUN	Noun	Case=Erg|Case[stack]=Gen|Number=Plur	8	obl	_	Translit=moquastʻa
5	განმან	გან	ADP	Post	AdpType=Post|Case=Gen	4	case	_	Translit=ganman
6	თჳნიერ	თჳნიერ	ADP	Post	AdpType=Post|Case=Gen	7	nmod	_	Translit=tʻwnier
7	განწესებულთასა	განწესებული	VERB	VerbalAdj	Case=Dat|Case[stack]=Gen|Number=Plur|VerbForm=Part|Voice=Pass	4	nmod	_	Translit=gancesebultʻasa
8	იკადროს	კადრება	VERB	Verb	Aspect=Perf|Mood=Sub|Number[subj]=Sing|Person[subj]=3|Tense=Pres|VerbForm=Fin|Voice=Act	14	advcl	_	Translit=ikadros
9	რასმე	რაჲმე	PRON	Pron	Case=Dat|Number=Sing|PronType=Ind	10	obj	_	Translit=rasme
10	შეწირვად	შეწირვა	VERB	VerbalNoun	Case=Ess|Number=Sing|VerbForm=Vnoun	8	xcomp	_	Translit=šecirvad
11	ანუ	ანუ	CCONJ	Conj	_	12	cc	_	Translit=anu
12	ქმნად	ქმნა	VERB	VerbalNoun	Case=Ess|Number=Sing|VerbForm=Vnoun	10	conj	_	SpaceAfter=No|Translit=kʻmnad
13	,	,	PUNCT	F	PunctType=Comm	14	punct	_	Translit=,
14	განიკუეთენ	განკუეთა	VERB	Verb	Aspect=Perf|Mood=Imp|Number[subj]=Plur|Person[subj]=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	Translit=ganikuetʻen
15	იგი	იგი	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Dem	14	nsubj:pass	_	Translit=igi
16	პატივისა	პატივი	NOUN	Noun	Case=Gen|Number=Sing	14	obl	_	Translit=pativisa
17	გან	გან	ADP	Post	AdpType=Post|Case=Ins	16	case	_	Translit=gan
18	თჳსისა	თჳსი	PRON	Pron	Case=Gen|Number=Sing|Poss=Yes|PronType=Prs	16	det	_	SpaceAfter=No|Translit=tʻwsisa
19	.	.	PUNCT	F	PunctType=Peri	14	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 12 nsubj:pass	color:blue
1	კთ(29)	კთ(29)	NUM	Num	NumForm=Georgian|NumType=Card	6	dep	_	Translit=ktʻ(29)
2	კართაგანელთა	კართაგანელი	NOUN	Noun	Case=Gen|Number=Plur	4	nmod	_	Translit=kartʻaganeltʻa
3	უკუე	უკუე	ADV	Adv	AdvType=Man	5	advmod	_	Translit=ukue
4	მამათა	მამა	NOUN	Noun	Case=Gen|Number=Plur	5	nmod	_	Translit=mamatʻa
5	კანონი	კანონი	NOUN	Noun	Case=Nom|Number=Sing	6	nsubj	_	Translit=kanoni
6	გჳწამებს	წამება	VERB	Verb	Aspect=Imp|Mood=Ind|Number[obj]=Plur|Number[subj]=Sing|Person[obj]=1|Person[subj]=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|Translit=gwcamebs
7	,	,	PUNCT	F	PunctType=Comm	6	punct	_	Translit=,
8	რაჲთა	რაჲთა	SCONJ	Conj	_	15	mark	_	Translit=raytʻa
9	წმიდასა	წმიდა	ADJ	Adj	Case=Dat|Degree=Pos|Number=Sing	10	amod	_	Translit=cmidasa
10	საკურთხეველსა	საკურთხეველი	NOUN	Noun	Case=Dat|Number=Sing	11	obl	_	Translit=sakurtʻxevelsa
11	ზედა	ზედა	ADV	Adv	AdvType=Loc	15	obl	_	Translit=zeda
12	მსხუერპლი	მსხუერპლი	NOUN	Noun	Case=Nom|Number=Sing	15	nsubj:pass	_	Translit=msxuerpli
13	თჳნიერ	თჳნიერ	ADP	Post	AdpType=Post|Case=Gen	14	case	_	Translit=tʻwnier
14	მარხულთა	მარხული	VERB	VerbalAdj	Case=Gen|Number=Plur|VerbForm=Part|Voice=Pass	15	obl	_	Translit=marxultʻa
15	კაცთასა	კაცი	NOUN	Noun	Case=Dat|Case[stack]=Gen|Number=Plur	16	obl	_	Translit=kacʻtʻasa
16	არა	არა	PART	Part	PartType=Neg	17	advmod:neg	_	Translit=ara
17	სრულ	სრულ	ADV	Adv	AdvType=Man	6	ccomp	_	Translit=srul
18	იქმნებოდის	ყოფა	AUX	Verb	Aspect=Imp|Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|VerbForm=Fin|Voice=Pass	17	cop	_	Translit=ikʻmnebodis
19	გარეშე	გარეშე	ADP	Post	AdpType=Post|Case=Gen	20	case	_	Translit=gareše
20	ერთისა	ერთი	NUM	Num	Case=Gen|Number=Sing|NumForm=Word|NumType=Card	23	nummod	_	Translit=ertʻisa
21	მის	იგი	PRON	Pron	Case=Gen|Number=Sing|Person=3|PronType=Prs	23	det	_	Translit=mis
22	წელიწდეულისა	წელიწდეული	ADJ	Adj	Case=Gen|Degree=Pos|Number=Sing	23	amod	_	Translit=celicdeulisa
23	დღისა	დღე	NOUN	Noun	Case=Gen|Number=Sing	17	obl	_	SpaceAfter=No|Translit=dġisa
24	,	,	PUNCT	F	PunctType=Comm	23	punct	_	Translit=,
25	რომელსა	რომელი	PRON	Pron	Case=Dat|Number=Sing|PronType=Rel	29	obl	_	Translit=romelsa
26	შინა	შინა	ADP	Post	AdpType=Post|Case=Dat	25	case	_	Translit=šina
27	საუფლოჲ	საუფლო	NOUN	Noun	Case=Nom|Number=Sing	28	nmod	_	Translit=saupʻloy
28	სერობაჲ	სერობა	NOUN	Noun	Case=Nom|Number=Sing	29	nsubj:pass	_	Translit=serobay
29	აღესრულების	აღსრულება	VERB	Verb	Aspect=Imp|Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|VerbForm=Fin|Voice=Pass	23	acl:relcl	_	SpaceAfter=No|Translit=aġesrulebis
30	.	.	PUNCT	F	PunctType=Peri	6	punct	_	Translit=.

~~~


