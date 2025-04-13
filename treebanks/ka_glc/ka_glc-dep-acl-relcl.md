---
layout: base
title:  'Statistics of acl:relcl in UD_Georgian-GLC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GLC: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="ka_glc-dep-acl.html">acl</a></tt>.

14 nodes (0%) are attached to their parents as `acl:relcl`.

12 instances of `acl:relcl` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.28571428571429.

The following 7 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="ka_glc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_glc-pos-VERB.html">VERB</a></tt> (5; 36% instances), <tt><a href="ka_glc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_glc-pos-VERB.html">VERB</a></tt> (3; 21% instances), <tt><a href="ka_glc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_glc-pos-ADJ.html">ADJ</a></tt> (2; 14% instances), <tt><a href="ka_glc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_glc-pos-VERB.html">VERB</a></tt> (1; 7% instances), <tt><a href="ka_glc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_glc-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="ka_glc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_glc-pos-ADJ.html">ADJ</a></tt> (1; 7% instances), <tt><a href="ka_glc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_glc-pos-PRON.html">PRON</a></tt> (1; 7% instances).


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
16	განსხვავდება	სხვაობს	VERB	Verb	Aspect=Perf|Mood=Ind|Number[subj]=Sing|Person[subj]=3|Subcat=Intr|Tense=Pres|Voice=Act	7	acl:relcl	_	SpaceAfter=No|Translit=gansxvavdeba
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
18	შეიძინა	აძინებს	VERB	Verb	Aspect=Perf|Mood=Ind|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Subcat=Tran|Tense=Past|Voice=Act	21	acl:relcl	_	SpaceAfter=No|Translit=šeiżina
19	,	,	PUNCT	F	PunctType=Comm	21	punct	_	Translit=,
20	პირველად	პირველად	ADV	Adv	AdvType=Tim	21	advmod	_	Translit=pirvelad
21	გამოიყენა	აყენებს	VERB	Verb	Aspect=Perf|Mood=Ind|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Subcat=Tran|Tense=Past|Voice=Act	0	root	_	Translit=gamoiqena
22	ზოსიმე	ზოსიმე	PROPN	Prop	Case=Erg|NameType=Prs|Number=Sing	21	nsubj	_	Translit=zosime
23	პანოპოლიტანელმა	პანოპოლიტანელი	NOUN	Noun	Animacy=Inan|Case=Erg|Number=Sing	22	flat:name	_	Translit=panopolitanelma
24	ჩვენი	ჩვენი	PRON	Pron	Case=Gen|Number=Plur|Person=1|Poss=Yes|PronType=Prs	25	det:poss	_	Translit=čʻveni
25	წელთაღრიცხვის	წელთაღრიცხვა	NOUN	Noun	Animacy=Inan|Case=Gen|Number=Sing	27	nmod	_	Translit=celtʻaġricʻxvis
26	IV	4	NUM	Num	NumForm=Roman|NumType=Card	27	nummod	_	Translit=IV
27	საუკუნის	საუკუნე	NOUN	Noun	Animacy=Inan|Case=Gen|Number=Sing	29	nmod	_	Translit=saukunis
28	მეორე	ორი	NUM	Num	Case=Dat|Number=Sing|NumType=Ord	29	nummod	_	Translit=meore
29	ნახევარ	ნახევარი	ADJ	Adj	Case=Dat|Number=Sing	21	obl	_	Translit=naxevar
30	ში	ში	ADP	Post	AdpType=Post|Case=Dat	29	case	_	Translit=ši
31	.	.	PUNCT	F	PunctType=Peri	21	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 14 acl:relcl	color:blue
1	ამჟამად	ამჟამად	ADV	Adv	AdvType=Tim	4	advmod	_	Translit=amžamad
2	ბირთვული	ბირთვული	ADJ	Adj	Case=Nom|Number=Sing	3	amod	_	Translit=birtʻvuli
3	ქიმია	ქიმია	NOUN	Noun	Animacy=Inan|Case=Nom|Number=Sing	4	nsubj	_	Translit=kʻimia
4	შეისწავლის	სწავლობს	VERB	Verb	Aspect=Perf|Mood=Ind|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Subcat=Tran|Tense=Fut|Voice=Act	0	root	_	Translit=šeiscavlis
5	ატომებისა	ატომი	NOUN	Noun	Animacy=Inan|Case=Gen|Number=Plur	9	nmod	_	Translit=atomebisa
6	და	და	CCONJ	Conj	_	7	cc	_	Translit=da
7	მოლეკულების	მოლეკულა	NOUN	Noun	Animacy=Inan|Case=Gen|Number=Plur	5	conj	_	Translit=molekulebis
8	ელექტრონული	ელექტრონული	ADJ	Adj	Case=Gen|Number=Sing	9	amod	_	Translit=elekʻtronuli
9	გარსების	გარსი	NOUN	Noun	Animacy=Inan|Case=Gen|Number=Plur	11	nmod	_	Translit=garsebis
10	ისეთ	ისეთი	PRON	Pron	Case=Dat|Number=Sing|PronType=Dem	11	det	_	Translit=isetʻ
11	ცვლილებას	ცვლილება	NOUN	Noun	Animacy=Inan|Case=Dat|Number=Sing	4	obj	_	SpaceAfter=No|Translit=cʻvlilebas
12	,	,	PUNCT	F	PunctType=Comm	14	punct	_	Translit=,
13	რომელიც	რომელიც	PRON	Pron	Case=Nom|Number=Sing|PronType=Rel	14	nsubj	_	Translit=romelicʻ
14	განპირობებული	განპირობებული	ADJ	Adj	Case=Nom|Number=Sing	11	acl:relcl	_	Translit=ganpirobebuli
15	ა	არის	AUX	Aux	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Subcat=Intr|Tense=Pres	14	cop	_	Translit=a
16	ატომური	ატომური	ADJ	Adj	Case=Gen|Number=Sing	17	amod	_	Translit=atomuri
17	ბირთვებისა	ბირთვი	NOUN	Noun	Animacy=Inan|Case=Gen|Number=Plur	21	obl	_	Translit=birtʻvebisa
18	და	და	CCONJ	Conj	_	20	cc	_	Translit=da
19	ელემენტარული	ელემენტარული	ADJ	Adj	Case=Gen|Number=Sing	20	amod	_	Translit=elementaruli
20	ნაწილაკების	ნაწილაკი	NOUN	Noun	Animacy=Inan|Case=Gen|Number=Plur	17	conj	_	Translit=nacilakebis
21	გარდაქმნით	გარდაქმნა	NOUN	Noun	Animacy=Inan|Case=Ins|Number=Sing	14	obl	_	SpaceAfter=No|Translit=gardakʻmnitʻ
22	.	.	PUNCT	F	PunctType=Peri	4	punct	_	Translit=.

~~~


