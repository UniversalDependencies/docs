---
layout: base
title:  'Statistics of acl:relcl in UD_Georgian-GLC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GLC: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="ka_glc-dep-acl.html">acl</a></tt>.

15 nodes (0%) are attached to their parents as `acl:relcl`.

13 instances of `acl:relcl` (87%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.13333333333333.

The following 5 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="ka_glc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_glc-pos-VERB.html">VERB</a></tt> (8; 53% instances), <tt><a href="ka_glc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_glc-pos-VERB.html">VERB</a></tt> (4; 27% instances), <tt><a href="ka_glc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_glc-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="ka_glc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_glc-pos-ADJ.html">ADJ</a></tt> (1; 7% instances), <tt><a href="ka_glc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_glc-pos-PRON.html">PRON</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 16 acl:relcl	color:blue
1	ბიოლოგიური	ბიოლოგიური	ADJ	Adj	Case=Gen|Number=Sing	2	amod	_	Translit=biologiuri
2	დეფინიციის	დეფინიცია	NOUN	Noun	Animacy=Inan|Case=Gen|Number=Sing	3	nmod	_	Translit=depʻinicʻiis
3	მიხედვით	მიხედვით	ADV	Adv	AdvType=Man	5	advmod	_	SpaceAfter=No|Translit=mixedvitʻ
4	,	,	PUNCT	F	PunctType=Comm	3	punct	_	Translit=,
5	რასა	რასა	NOUN	Noun	Animacy=Inan|Case=Nom|Number=Sing	0	root	_	Translit=rasa
6	არის	არის	AUX	Aux	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Subcat=Intr|Tense=Pres	5	cop	_	Translit=aris
7	პოპულაცია	პოპულაცია	NOUN	Noun	Animacy=Inan|Case=Nom|Number=Sing	5	nsubj	_	SpaceAfter=No|Translit=populacʻia
8	,	,	PUNCT	F	PunctType=Comm	16	punct	_	Translit=,
9	რომელიც	რომელიც	PRON	Pron	Case=Nom|Number=Sing|PronType=Rel	16	nsubj	_	Translit=romelicʻ
10	სხვა	სხვა	PRON	Pron	Case=Gen|Number=Sing|PronType=Tot	11	det	_	Translit=sxva
11	პოპულაციებისა	პოპულაცია	NOUN	Noun	Animacy=Inan|Case=Gen|Number=Plur	16	obl	_	Translit=populacʻiebisa
12	გან	გან	ADP	Post	AdpType=Post|Case=Gen	11	case	_	Translit=gan
13	გენების	გენი	NOUN	Noun	Animacy=Inan|Case=Gen|Number=Plur	15	nmod	_	Translit=genebis
14	გარკვეული	გარკვეული	ADJ	Adj	Case=Ins|Number=Plur	15	amod	_	Translit=garkveuli
15	მახასიათებლებით	მახასიათებელი	NOUN	Noun	Animacy=Inan|Case=Ins|Number=Plur	16	obl	_	Translit=maxasiatʻeblebitʻ
16	განსხვავდება	სხვაობს	VERB	Verb	Aspect=Perf|Mood=Ind|Number[subj]=Sing|Person[subj]=3|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Act	7	acl:relcl	_	SpaceAfter=No|Translit=gansxvavdeba
17	.	.	PUNCT	F	PunctType=Peri	5	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 18 acl:relcl	color:blue
1	ისტორიული	ისტორიული	ADJ	Adj	Case=Gen|Number=Sing	2	amod	_	Translit=istoriuli
2	წყაროების	წყარო	NOUN	Noun	Animacy=Inan|Case=Gen|Number=Plur	4	nmod	_	Translit=cqaroebis
3	თანახმად	თანახმად	ADV	Adv	AdvType=Man	4	advmod	_	Translit=tʻanaxmad
4	ტერმინი	ტერმინი	NOUN	Noun	Animacy=Inan|Case=Nom|Number=Sing	18	obj	_	Translit=termini
5	„	„	PUNCT	F	PunctType=Quot	6	punct	_	SpaceAfter=No|Translit=„
6	ქიმია	ქიმია	NOUN	Noun	Animacy=Inan|Case=Nom|Number=Sing	4	appos	_	SpaceAfter=No|Translit=kʻimia
7	“	“	PUNCT	F	PunctType=Quot	6	punct	_	Translit=“
8	იმ	ის	PRON	Pron	Case=Ins|Number=Sing|Person=3|PronType=Dem	9	det	_	Translit=im
9	მნიშვნელობით	მნიშვნელობა	NOUN	Noun	Animacy=Inan|Case=Ins|Number=Sing	18	obl	_	SpaceAfter=No|Translit=mnišvnelobitʻ
10	,	,	PUNCT	F	PunctType=Comm	18	punct	_	Translit=,
11	რომელიც	რომელიც	PRON	Pron	Case=Nom|Number=Sing|PronType=Rel	18	acl	_	SpaceAfter=No|Translit=romelicʻ
12	,	,	PUNCT	F	PunctType=Comm	11	punct	_	Translit=,
13	მან	იგი	PRON	Pron	Case=Erg|Number=Sing|Person=3|PronType=Prs	18	nsubj	_	Translit=man
14	დასავლურ	დასავლური	ADJ	Adj	Case=Dat|Number=Sing	16	amod	_	Translit=dasavlur
15	ევროპულ	ევროპული	ADJ	Adj	Case=Dat|Number=Sing	16	amod	_	Translit=evropul
16	ცივილიზაცია	ცივილიზაცია	NOUN	Noun	Animacy=Inan|Case=Dat|Number=Sing	18	obl	_	Translit=cʻivilizacʻia
17	ში	ში	ADP	Post	AdpType=Post|Case=Dat	16	case	_	Translit=ši
18	შეიძინა	აძინებს	VERB	Verb	Aspect=Perf|Mood=Ind|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	21	acl:relcl	_	SpaceAfter=No|Translit=šeiżina
19	,	,	PUNCT	F	PunctType=Comm	21	punct	_	Translit=,
20	პირველად	პირვლად	ADV	Adv	AdvType=Tim	21	advmod	_	Translit=pirvelad
21	გამოიყენა	იყენებს	VERB	Verb	Aspect=Perf|Mood=Ind|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Translit=gamoiqena
22	ზოსიმე	ზოსიმე	PROPN	Prop	Case=Erg|NameType=Prs|Number=Sing	21	nsubj	_	Translit=zosime
23	პანოპოლიტანელმა	პანოპოლიტანელი	NOUN	Noun	Animacy=Inan|Case=Erg|Number=Sing	22	flat:name	_	Translit=panopolitanelma
24	ჩვენი	ჩვენი	PRON	Pron	Case=Gen|Number=Plur|Person=1|Poss=Yes|PronType=Prs	25	det:poss	_	Translit=čʻveni
25	წელთაღრიცხვის	წელთაღრიცხვა	NOUN	Noun	Animacy=Inan|Case=Gen|Number=Sing	27	nmod	_	Translit=celtʻaġricʻxvis
26	IV	4	NUM	Num	NumForm=Roman|NumType=Card	27	nummod	_	Translit=IV
27	საუკუნის	საუკუნე	NOUN	Noun	Animacy=Inan|Case=Gen|Number=Sing	29	nmod	_	Translit=saukunis
28	მეორე	ორი	NUM	Num	Case=Dat|NumType=Ord	29	nummod	_	Translit=meore
29	ნახევარ	ნახევარი	ADJ	Adj	Case=Dat|Number=Sing	21	obl	_	Translit=naxevar
30	ში	ში	ADP	Post	AdpType=Post|Case=Dat	29	case	_	Translit=ši
31	.	.	PUNCT	F	PunctType=Peri	21	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 acl:relcl	color:blue
1	ხსნარს	ხსნარი	NOUN	Noun	Animacy=Inan|Case=Dat|Number=Sing	14	nsubj:pass	_	SpaceAfter=No|Translit=xsnars
2	,	,	PUNCT	F	PunctType=Comm	1	punct	_	Translit=,
3	რომელ	რომელი	PRON	Pron	Case=Dat|Number=Sing|PartType=Emp|PronType=Int	8	obl	_	Translit=romel
4	შიც	ში	ADP	Post	AdpType=Post|Case=Dat	3	case	_	Translit=šicʻ
5	არ	არ	PART	Part	PartType=Neg	8	advmod	_	Translit=ar
6	არის	არის	AUX	Aux	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Subcat=Intr|Tense=Pres	8	cop	_	Translit=aris
7	არც	არც	PART	Part	PartType=Emp	8	advmod	_	Translit=arcʻ
8	მჟავა	მჟავა	NOUN	Noun	Animacy=Inan|Case=Nom|Number=Sing	1	acl:relcl	_	Translit=mžava
9	და	და	CCONJ	Conj	_	11	cc	_	Translit=da
10	არც	არც	PART	Part	PartType=Emp	11	advmod	_	Translit=arcʻ
11	ტუტე	ტუტე	NOUN	Noun	Animacy=Inan|Case=Nom|Number=Sing	8	conj	_	SpaceAfter=No|Translit=tute
12	,	,	PUNCT	F	PunctType=Comm	1	punct	_	Translit=,
13	ნეიტრალური	ნეიტრალური	ADJ	Adj	Case=Nom|Number=Sing	14	amod	_	Translit=neitraluri
14	ხსნარი	ხსნარი	NOUN	Noun	Animacy=Inan|Case=Nom|Number=Sing	15	obj	_	Translit=xsnari
15	ეწოდება	უწოდებს	VERB	Verb	Aspect=Imp|Mood=Ind|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No|Translit=ecodeba
16	.	.	PUNCT	F	PunctType=Peri	15	punct	_	Translit=.

~~~


