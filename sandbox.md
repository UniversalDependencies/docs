---
layout: base
title:  'Sandbox'
---

# Sandbox

This file is intended as a "sandbox" for trying out the editing
features. Feel free to make changes by clicking the "edit page" link
at the top. (You need to be a project member and logged in to GitHub
for this to work.)

(Please note: this page is public and shared with others, and its
contents will be regularly reset. Don't store anything you want to
keep here.)

----------

# Some markdown

* bulleted
* list

1. numbered
2. list

Link: [link text](http://www.example.com)

# header 1

## header 2

### header 3

#### header 4

*italics* and **bold**

`inline code`

----------

# Some visualizations

~~~ sdparse
Just some tokens
~~~

~~~ sdparse
Tokens/Noun with/Adpos POS/Noun
~~~

~~~ sdparse
A dependency
det(dependency, A)
~~~

<div class="sd-parse">
Alternative syntax
</div>

<div class="sd-parse" tabs="yes">
Dynamic visualization (click "edit!")
</div>

~~~ sdparse
Example with error
det(no-such, token)
~~~

----------

## CoNLL-U example

<div class="conllu-parse" tabs="yes">
1     Εγώ         εγώ        PRON    PRN      Num=Sing|Per=1     2      nsubj _ _
2-3   haven't   _        _       _        _                  _      _ _ _
2     have      have     VERB    VB       Tens=Pres          0      root _ _
3     not       not      ADV     RB       _                  2      neg _ _
4     a         a        DET     DT       _                  5      det _ _
5     clue      clue     NOUN    NN       Num=Sing           2      dobj _ _
6     .         .        PUNCT   .        _                  2      punct _ _
</div>

### Enhanced depencies
Let's use red for enhanced-only, blue for basic-only and black for basic&enhanced dependencies:
<div class="conllu-parse" tabs="yes" id="pirate-example">
# visual-style 4 5 ref color:red
# visual-style 6 4 nmod:poss color:red
# visual-style 6 5 nmod:poss color:blue
1   I   I   PRON    PRP Case=Nom|Number=Sing|Person=1|PronType=Prs  2   nsubj   _   _
2   saw see VERB    VBD Mood=Ind|Tense=Past|VerbForm=Fin    0   root    _   _
3   a   a   DET DT  Definite=Ind|PronType=Art   4   det _   _
4   man man NOUN    NN  Number=Sing 2   dobj    6:nmod:poss   _
5   whose   whose   PRON    WP$ Poss=Yes|PronType=Int   6   nmod:poss   4:ref   _
6   mother  mother  NOUN    NN  Number=Sing 7   nsubj   _   _
7   become  become  VERB    VB  VerbForm=Inf    4   acl:relcl   _   _
8   a   a   DET DT  Definite=Ind|PronType=Art   9   det _   _
9   pirate  pirate  NOUN    NN  Number=Sing 7   xcomp   _   SpaceAfter=No
10  .   .   PUNCT   .   _   2   punct   _   _
</div>

For shorter sentences we can use side-by-side view (this may be clearer, especially if empty nodes are introduced):
<table id="ellipsis-example">
<thead><tr><th>Basic</th><th>Enhanced</th></tr></thead>
<tbody><tr><td width="600">
<div class="conllu-parse" tabs="yes">
# visual-style 5 6 remnant color:blue
# visual-style 2 5 conj color:blue
1   I   I  _ _ _  2   nsubj   _  _
2   like like  _ _ _  0   root   _   _
3   tea tea _ _ _ 2 obj    _   _
4   and and _ _ _ 5   cc  _   _
5   you you _ _ _ 2 conj   _   _
6   rum rum _ _ _ 5  remnant _  _
7   .   .   _ _ _ 2  punct  _  _
</div>
</td><td width="600">
<div class="conllu-parse" tabs="yes">
# visual-style 6 7 obj color:red
# visual-style 6 5 nsubj color:red
# visual-style 2 6 conj color:red
1   I  _ _ _ _ 2  nsubj   _  _
2   like _ _ _ _ 0  root    _  _
3   tea _ _ _ _ 2  obj    _  _
4   and _ _ _ _ 5 cc  _  _
5   you _ _ _ _ 6 nsubj   _  _
6   E5.1 _ _ _ _ 2 conj    _  _
7   rum _ _ _ _ 6 obj  _ _
8   .   _ _ _ _ 2 punct   _  _
</div>
</td></tr></tbody>
</table>

### Foreign examples
Two sentences can be used to show the English translation of a foreign example:

<pre><code class="language-conllu"># give the toys to the children
1 donner donner VERB _ VerbForm=Inf 0 root _ give
2 les le DET _ Definite=Def|Number=Plur 3 det _ the
3 jouets jouet NOUN _ Gender=Masc|Number=Plur 1 dobj _ toys
4-5 aux _ _ _ _ _ _ _ _
4 à à ADP _ _ 6 case _ to
5 les le DET _ Definite=Def|Number=Plur 6 det _ the
6 enfants enfant NOUN _ Gender=Masc|Number=Plur 1 nmod _ children

# now the parallel English tree
1 give donner VERB _ VerbForm=Inf 0 root _ give
2 the le DET _ Definite=Def|Number=Plur 3 det _ the
3 toys jouet NOUN _ Gender=Masc|Number=Plur 1 dobj _ toys
4 to à ADP _ _ 6 case _ to
5 the le DET _ Definite=Def|Number=Plur 6 det _ the
6 children enfant NOUN _ Gender=Masc|Number=Plur 1 nmod _ children
</code></pre>

Simplified syntax + sentence label

~~~ conllu
# sentence-label long-label
1     I         I        PRON    PRN      Num=Sing|Per=1     2      nsubj _ _
2     have      have     VERB    VB       Tens=Pres          0      root _ _
~~~

<a name="hebrew" />

## Right-to-left text (Hebrew)

~~~ sdparse
Aדני/NOUN Aראה/VERB Aסרט/NOUN
nsubj(Aראה, Aדני)
dobj(Aראה, Aסרט)
~~~

Same without "A" (should trigger auto-insertion of "ˑ")

~~~ sdparse
דני/NOUN ראה/VERB סרט/NOUN
nsubj(ראה, דני)
dobj(ראה, סרט)
~~~

Same sentence in CoNLL-U:

~~~ conllu
1     ˑדניˑ       _        NOUN    _      _     2      nsubj _ _
2     ˑראהˑ       _        VERB    _      _     0      root  _ _
3     ˑסרטˑ       _        NOUN    _      _     2      dobj  _ _
~~~

Without literal "ˑ" in input  (should trigger auto-insertion)

~~~ conllu
1     דני       _        NOUN    _      _     2      nsubj _ _
2     ראה       _        VERB    _      _     0      root  _ _
3     סרט       _        NOUN    _      _     2      dobj  _ _
~~~

Does Arabic work as well?

~~~ conllu
1     ˑوَˑ       _        NOUN    _      _     2      nsubj _ _
2     ˑلاحَظَˑ       _        VERB    _      _     0      root  _ _
3     ˑالتَقْرِيرُˑ       _        NOUN    _      _     2      dobj  _ _
~~~

Without literal "ˑ" in input  (should trigger auto-insertion)

~~~ conllu
1     وَ       _        NOUN    _      _     2      nsubj _ _
2     لاحَظَ       _        VERB    _      _     0      root  _ _
3     التَقْرِيرُ       _        NOUN    _      _     2      dobj  _ _
~~~

~~~ conllu
1     ‎דני       _        NOUN    _      _     2      nsubj _ _
2     ‎ראה       _        VERB    _      _     0      root  _ _
3     ‎סרט       _        NOUN    _      _     2      dobj  _ _
~~~
----------

# Some Jekyll 

## Finnish documentation for relations containing "cop" 

{% for p in site.fi-dep %}
{% if p.title contains "cop" %}
{{ p.content }}
{% endif %}
{% endfor %}

## Finnish documentation for relations with tag "case"

{% for p in site.fi-dep %}
{% if p.tags contains "case" %}
{{ p.content }}
{% endif %}
{% endfor %}

----------

### Irish example
~~~ conllu
1	Eisean	eisean	PRON	PRON	_	0	ROOT	_	_
2	a	a	PART	PART	_	3	mark:prt	_	_
3	thug	tabhair	VERB	VERB	_	1	nsubj	_	_
4	chuig	chuig	ADP	ADP	_	3	case	_	_
5	an	an	DET	DET	_	6	det	_	_
6	mbád	bád	NOUN	NOUN	_	4	nmod	_	_
7	mé	mé	PRON	PRON	_	3	dobj	_	_
8	arú	arú	ADV	ADV	_	9	advmod	_	_
9	aréir	aréir	ADV	ADV	_	3	advmod	_	_
10	.	.	PUNCT	PUNCT	_	1	punct	_	_
~~~

### German
~~~ sdparse
Alles hat ein Ende , nur die Wurst hat zwei .
nsubj(hat-2,Alles)
obj(hat-2,Ende)
det(Ende,ein)
nsubj(hat-9,Wurst)
obj(hat-9,zwei)
det(Wurst,die)
advmod(hat-9,nur)
parataxis(hat-2,hat-9)
~~~



## Test for #363

~~~ conllu
# visual-style 6 7 obj color:red
# visual-style 5.1 5 nsubj color:red
# visual-style 2 5.1 conj color:red
# visual-style 5 6 remnant color:blue
# visual-style 2 5 conj color:blue
1   I    _ _ _ _ 2 nsubj   _  _
2   like _ _ _ _ 0 root    _  _
3   tea  _ _ _ _ 2 obj     _  _
4   and  _ _ _ _ 5 cc      _  _
5   you  _ _ _ _ 2 conj    5.1:nsubj  _
5.1 E5.1 _ _ _ _ _ _       2:conj _
6   rum  _ _ _ _ 5 remnant 5.1:obj _
7   .    _ _ _ _ 2 punct   _  _
~~~

Empty node test with full tree in DEPS

~~~ conllu
1	Sue	Sue	PROPN	_	_	2	nsubj	2:nsubj	_
2	likes	like	VERB	_	_	0	root	0:root	_
3	coffee	coffee	NOUN	_	_	2	obj	2:obj	_
4	and	and	CCONJ	_	_	5	cc	5:cc	_
5	Bill	a	PROPN	_	_	2	conj	5.1:nsubj	_
5.1	likes	like	VERB	_	_	_	_	2:conj	_
6	tea	tea	NOUN	_	_	5	orphan	5.1:obj	_

~~~

Simpler

~~~ conllu
1	This	this	PRON	_	_	2	orphan	2:nsubj	_
1.1	is	is	VERB	_	_	_	_	2:cop	_
2	valid	valid	ADJ	_	_	0	root	0:root	_

~~~

### Enhanced dependencies experiments

"Il governo sono io, non Walesa e presto vedrò il leader sovietico"

<div class="conllu-parse" tabs="yes" id="tut-2947">
# visual-style 5 11 nsubj color:red
# visual-style 8 3 nsubj color:red
1	"	"	PUNCT	FB	_	3	punct	_	SpaceAfter=No
2	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	governo	governo	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
4	sono	essere	AUX	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	cop	_	_
5	io	io	PRON	PE	Number=Sing|Person=1|PronType=Prs	3	nsubj	11:nsubj	Propagate=Yes|SpaceAfter=No
6	,	,	PUNCT	FF	_	7	punct	_	_
7	non	non	ADV	BN	PronType=Neg	8	advmod	_	_
8	Walesa	Walesa	PROPN	SP	_	5	conj	3:nsubj	_
9	e	e	CCONJ	CC	_	11	cc	_	_
10	presto	presto	ADV	B	_	11	advmod	_	_
11	vedrò	vedere	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin	3	conj	_	_
12	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	leader	leader	NOUN	S	Gender=Masc	11	obj	_	_
14	sovietico	sovietico	ADJ	A	Gender=Masc|Number=Sing	13	amod	_	SpaceAfter=No
15	"	"	PUNCT	FB	_	3	punct	_	SpaceAfter=No
  
</div>
## Current Czech prose - cases of preceding genitive: (a bit marked word-order) quantities governed by a genitive-requesting numeral and fixed expressions

This would be parsed correctly, neutral word order

~~~ conllu
# text = Zaplatíte poplatek 1200 korun
1	Zaplatíte	zaplatit	VERB	VB-P---2P-AAP--	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TokenRange=0:9
2	poplatek	poplatek	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	1	obj	_	TokenRange=10:18
3	1200	1200	NUM	C=-------------	NumForm=Digit|NumType=Card	4	nummod:gov	_	TokenRange=19:23
4	korun	koruna	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	2	nmod	_	SpacesAfter=\s\r\n|TokenRange=24:29

~~~  



And this slightly marked word order gets wrongly parsed as two objects!

~~~ conllu
# text = Zaplatíte 1200 korun poplatek
1	Zaplatíte	zaplatit	VERB	VB-P---2P-AAP--	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TokenRange=0:9
2	1200	1200	NUM	C=-------------	NumForm=Digit|NumType=Card	3	nummod:gov	_	TokenRange=10:14
3	korun	koruna	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	1	obj	_	TokenRange=15:20
4	poplatek	poplatek	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	1	obj	_	SpacesAfter=\r\n|TokenRange=21:29

~~~  

~~~ conllu
# text = Je to svého druhu unikum.
1	Je	být	AUX	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	TokenRange=49:51
2	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	5	nsubj	_	TokenRange=52:54
3	svého	svůj	DET	P8ZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	4	det	_	TokenRange=55:60
4	druhu	druh	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	5	nmod	_	TokenRange=61:66
5	unikum	unikum	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	0	root	_	SpaceAfter=No|TokenRange=67:73
6	.	.	PUNCT	Z:-------------	_	5	punct	_	SpaceAfter=No|TokenRange=73:74

~~~


## Head and preposed genitive noun attribute adjacent

#### Test visual style


# visual-style 6 7 obj color:red
# visual-style 5.1 5 nsubj color:red
# visual-style 2 5.1 conj color:red
# visual-style 5 6 remnant color:blue
# visual-style 2 5 conj color:blue

~~~ sdparse
# visual-style nmod(dědictví, otců) color:red
věrni otců dědictví 
nmod(dědictví, otců)
obl:arg(věrni, dědictví)

~~~

0078-0001-0000-0000-0028-0000_7/gold

~~~ sdparse
věrni otců dědictví 
nmod(dědictví, otců)
obl:arg(věrni, dědictví)

~~~


0078-0001-0000-0000-0028-0000_8/auto
 
 
~~~ sdparse
věrni otců dědictví
obl:arg(věrni, otců)
obl:arg(věrni, dědictví)

~~~


0362-0001-0003-0000-0011-0000_8/gold

~~~ sdparse
drahokamů ozdoby Spadaly s ňader Tvých 
nmod(ozdoby, drahokamů)
nsubj(Spadaly, ozdoby)
~~~


0362-0001-0003-0000-0011-0000_8/auto
~~~ sdparse
drahokamů ozdoby Spadaly s ňader Tvých 
nsubj(Spadaly, drahokamů)
nsubj(Spadaly, ozdoby)

~~~ 

but the sequence can be interrupted: here adjectival attribute of the head noun and adverb - hair previously red
 
---------

0362-0001-0003-0000-0011-0000_1/auto
error: v záplavě kdysi rudých vlasů

~~~ sdparse
V rudých kdys vlasů záplavě jsem viděl světici 
case(kdys, V)
amod(kdys, rudých)
nmod(kdys, vlasů)
obl(viděl, záplavě)

~~~

 0362-0001-0003-0000-0011-0000_1/gold

~~~ sdparse
V rudých kdys vlasů záplavě jsem viděl světici
case(záplavě, V)
amod(vlasů, rudých)
nmod(záplavě, vlasů)
obl(viděl, záplavě)
~~~



0067-0001-0001-0000-0007-0000_7/gold

~~~ sdparse
zbledla nadějí mu zoře 
punct(zbledla, ,)
nmod(zoře, nadějí)
obl(zbledla, mu)
nsubj(zbledla, zoře)

~~~
0067-0001-0001-0000-0007-0000_7/auto
focused error: zoře nadějí


~~~ sdparse
zbledla nadějí mu zoře 
obl(zbledla, nadějí)
obl:arg(zbledla, mu)
obj(zbledla, zoře)
~~~~

the same in conllu
nadějí wrongly tagged as instrumental, "His morning star has faded from hopes" (hopes caused the fading) 
~~~ conllu
# sent_id = 0067-0001-0001-0000-0007-0000_7/auto
# text = Podťata mu lípa svatá, zbledla nadějí mu zoře
1	Podťata	podťatý	ADJ	VsQW----X-APP--	Aspect=Perf|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
2	mu	on	PRON	P5ZS3--3-------	Case=Dat|Gender=Masc,Neut|Number=Sing|Person=3|PronType=Prs|Variant=Short	1	obl:arg	_	_
3	lípa	lípa	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	1	nsubj	_	_
4	svatá	svatý	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	3	amod	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	6	punct	_	_
6	zbledla	zblednout	VERB	VpQW----R-AAP-1	Aspect=Perf|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	1	conj	_	_
7	nadějí	naděje	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	6	obl	_	_
8	mu	on	PRON	P5ZS3--3-------	Case=Dat|Gender=Masc,Neut|Number=Sing|Person=3|PronType=Prs|Variant=Short	6	obl:arg	_	_
9	zoře	zoře	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	6	obj	_	SpaceAfter=No

~~~


----
Non-projective preposed genitive attribute

0883-0001-0002-0000-0009-0000_2/gold

~~~ sdparse
Myšlenek ať táhnou roje  
nmod(roje, Myšlenek)
advmod(táhnou, ať)
nsubj(táhnou, roje)

~~~

Parser gets confused, two nsubj - parser considers the first noun nsubj despite weird case, also in the next sentence   
 
0883-0001-0002-0000-0009-0000_2/auto

~~~ sdparse
Myšlenek ať táhnou roje 
nsubj(táhnou, Myšlenek)
advmod(táhnou, ať)
nsubj(táhnou, roje)

~~~

Another non-projective case

The whole sentence: **A ráno pak se často divím víc , než Fra Angelico , jenž v ruce schoval tvář bledou žasem , Madonny když líc mu anděl tajně přes noc domaloval !**

1010-0001-0001-0000-0001-0000_3/gold

~~~ sdparse
Madonny když líc anděl domaloval
nmod(líc, Madonny)
mark(domaloval, když)
obj(domaloval, líc)
nsubj(domaloval, anděl)

~~~

 1010-0001-0001-0000-0001-0000_4/auto

~~~ sdparse
schoval , Madonny když líc  anděl domaloval !
conj(schoval, Madonny)
mark(domaloval, když)
obj(domaloval, líc)
nsubj(domaloval, anděl)
advcl(schoval, domaloval)

~~~

Mind to add the screenshot of the tree graph in the presentation


When the whole structure comes after the verb, the parser usually just swaps the dependency relation

 0956-0002-0000-0000-0014-0000_7/gold

~~~ sdparse
písně , jež zpíval kraje hlas .
acl:relcl(písně, zpíval)
nmod(hlas, kraje)
nsubj(zpíval, hlas)

~~~

0956-0002-0000-0000-0014-0000_7/auto
 
~~~ sdparse
písně , jež zpíval  kraje hlas .
acl:relcl(písně, zpíval)
nsubj(zpíval, kraje)
conj(kraje, hlas)

~~~


Another such example (swapped dependency when after verb)


1066-0001-0002-0000-0005-0000_4/gold

~~~ sdparse
Proč nešel s všedních lidí davem ?
case(davem, s)
amod(lidí, všedních)
nmod(davem, lidí)

~~~

1066-0001-0002-0000-0005-0000_4/auto

~~~ sdparse
Proč nešel s všedních lidí davem ?
case(lidí, s)
amod(lidí, všedních)
obl(nešel, lidí)

~~~


Sometimes the problem is aggravated by wrong tagging and lemmatization of genitives (here a comparative stat to PDT, does number matter, too? Maybe plural even worse??)
Count *tagging* errors in genitive plurals
 
 řas Gen Pl of řasa (eyelash), parser mislemmatizes it as accusative of masculine inanimate singular "řas" 
 
 
sny, jež obletují tvář Jí vnadnou, odhání pryč řas pružným vějířem 
 
~~~ conllu 
# sent_id = 1191-0001-0003-0000-0002-0000_8/gold
# text = sny odhání pryč řas pružným vějířem
1	sny	sen	NOUN	NNIP1-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	2	obj	_	SpaceAfter=No
2	odhání	odhánět	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	pryč	pryč	ADV	Db-------------	_	2	advmod	_	_
4	řas	řasa	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	6	nmod	_	_
5	pružným	pružný	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	6	amod	_	_
6	vějířem	vějíř	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	2	obl	_	SpaceAfter=No

~~~ 

~~~ conllu
# sent_id = 1191-0001-0003-0000-0002-0000_11/auto
# text = sny odhání pryč řas pružným vějířem.
1	sny	sen	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	2	obj	_	SpaceAfter=No
2	odhání	odhánět	VERB	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	pryč	pryč	ADV	Db-------------	_	2	advmod	_	_
4	řas	řas	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	2	obj	_	_
5	pružným	pružný	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	6	amod	_	_
6	vějířem	vějíř	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	2	obl	_	SpaceAfter=No

~~~

Preposed adjectival attribute, sequence interrupted (non-projective trees)
0067-0001-0001-0000-0007-0000_2/gold

(vrána) rozlétla se, usadila černá usadila na bílou až horu 

~~~ sdparse
rozlétla se, usadila černá na bílou až horu
case(horu, na)
amod(horu, bílou)
advmod:emph(usadila, až)
obl(usadila, horu)

~~~

0067-0001-0001-0000-0007-0000_2/auto 
 
~~~ sdparse 
rozlétla se , usadila černá na bílou až horu .
case(bílou, na)
dep(usadila, bílou)
advmod:emph(horu, až)
obj(usadila, horu)

~~~

0083-0001-0001-0000-0015-0000_12/gold

~~~ sdparse
jediné jen dej mi slyšet slovo
amod(slovo, jediné)
obj(slyšet, slovo)

~~~

 0083-0001-0001-0000-0015-0000_12/auto
 
~~~ sdparse
jediné jen dej mi slyšet slovo
dep(dej, jediné)
obj(slyšet, slovo)

~~~ 


0674-0001-0006-0000-0019-0000_8/gold

~~~ sdparse
v lůžku tichém spíte , Nad jehožto křížek stkví se hlavou 
case(hlavou, Nad)
det(hlavou, jehožto)
nsubj(stkví, křížek)
acl:relcl(lůžku, stkví)
expl:pv(stkví, se)


~~~

0674-0001-0006-0000-0019-0000_8/auto

~~~ sdparse
v lůžku tichém spíte , Nad jehožto křížek stkví se hlavou
case(jehožto, Nad)
obl(stkví, jehožto)
nsubj(stkví, křížek)
conj(spíte, stkví)

~~~

0889-0006-0003-0000-0036-0000_4/gold

~~~ sdparse
Mnohý tak odkvet’ mi v žití stvol 
amod(stvol, Mnohý)
obl(odkvet’, žití)
nsubj(odkvet’, stvol)

~~~

0889-0006-0003-0000-0036-0000_4/auto

~~~ sdparse
Mnohý tak odkvet’ mi v žití stvol
nsubj(odkvet’, Mnohý)
obl(odkvet’, žití)
obj(odkvet’, stvol)

~~~ 


-------------------
Preposed predicative attribute with argument structure - this would be postposed in current Czech prose  

0362-0001-0003-0000-0011-0000_12/gold
Where to no avail Sebastian handsome abundant nakedness, genitals teased by an arrow exposes

.

kde Šebestián ... Drážděné šípem genitálie ukazuje

~~~ sdparse
Kde Šebestián Drážděné šípem genitálie ukazuje 
advmod (ukazuje, Kde)
nsubj(ukazuje, Šebestián)
amod(genitálie, Drážděné)
obl(Drážděné, šípem)

~~~


0362-0001-0003-0000-0011-0000_13/auto (corresponds to 12 in gold)


~~~ sdparse

... vztyčuje, Kde Šebestián Drážděné šípem genitálie ukazuje 
conj(Kde, Šebestián)
xcomp(ukazuje, Drážděné)
obl(Drážděné, šípem)
obj(ukazuje, genitálie)
conj(vztyčuje, ukazuje)

~~~


## Missing copula predicates





