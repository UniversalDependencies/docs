## Head-final Tamil and head-initial dependency notation

Tamil is generally a head-final language, meaning that objects, modifiers, case-marked nominals, and subordinate clauses typically precede their head. However, to maintain compatibility with UD annotation guidelines, the dependency notation follows a head-initial convention.


## Relations covered

The following relations are documented because they occur in the MWTT treebank.

~~~sdparse
acl
  acl:relcl
advcl
  advcl:cond
advmod
  advmod:emph
amod
aux
  aux:neg
  aux:pass
case
cc
compound
  compound:lvc
  compound:redup
conj
det
iobj
mark
nmod
  nmod:poss
nsubj
  nsubj:nc
  nsubj:pass
nummod
obj
obl
  obl:agent
  obl:arg
  obl:cmpr
  obl:inst
  obl:lmod
  obl:pmod
  obl:tmod
punct
root
vocative
xcomp
~~~

## Core clause relations

### `root`: root

Marks the main head of the sentence. The root has `HEAD=0`.

~~~sdparse
என் பையன்கள் வந்தார்கள் . \n eṉ paiyaṉkaḷ vantārkaḷ .  \n My boys came .
root(ROOT, வந்தார்கள்)
root(ROOT, vantārkaḷ)
root(ROOT, came)
~~~

Source example: `sent_id = 1`.

### `punct`: punctuation

Punctuation marks attached to the relevant head.

~~~sdparse
என் பையன்கள் வந்தார்கள் . \n eṉ paiyaṉkaḷ vantārkaḷ .  \n My boys came .
eṉ paiyaṉkaḷ vantārkaḷ .
punct(வந்தார்கள், .)
punct(vantārkaḷ, .)
root(came, .)
~~~

Source example: `sent_id = 1`.

### `nsubj`: nominal subject

Marks the nominal subject of a clause. Tamil also has non-canonical subjects, usually marked with dative marker, is discussed later.

~~~sdparse
என் பையன்கள் வந்தார்கள் . \n eṉ paiyaṉkaḷ vantārkaḷ .  \n My boys came .
eṉ paiyaṉkaḷ vantārkaḷ .
nsubj(வந்தார்கள், பையன்கள்)
nsubj(vantārkaḷ, paiyaṉkaḷ)
nsubj(came, boys)

~~~

Source example: `sent_id = 1`.

### `nsubj:nc`: non-canonical subject

A Tamil-specific subtype used in the dataset for non-canonical subjects, particularly dative experiencers or possessor-like subjects where the predicate does not license PNG (Person-Number-Gender) agreement. Although Universal Dependencies (UDv2) guidelines typically treat these non-canonical nominals as obliques rather than core subjects (nsubj) due to their dative case marking and lack of regular nominative behavior, we deviate from the standard framework here to align with established Tamil linguistic literature. Furthermore, these nominals do not entirely lose their subjecthood, as they consistently pass syntactic subjecthood tests such as binding reflexive anaphors.

~~~sdparse
குமாருக்கு தலை வலிக்கிறது . \n kumārukku talai valikkiṟatu . \n Kumar-DAT head pain-it
nsubj:nc(வலிக்கிறது, குமாருக்கு)
nsubj:nc(valikkiṟatu, kumārukku)
nsubj:nc(pain-it, Kumar-dat)


~~~

Source example: `sent_id = 424`.


### `nsubj:pass`: passive nominal subject

Marks the subject of a passive predicate. In Tamil, the passive voice is realized using an auxiliary verb. The main verb — rather than the auxiliary token that marks the passive, tense, and PNG features — is considered the head. In this case, In this case, passive auxiliary may also receive `aux:pass`.

~~~sdparse
குமார் அப்பாவால் அடிக்கப் பட்டான் . \n kumār appāvāl aṭikkap paṭṭāṉ . \n Kumar father-by beat-inf was .
nsubj:pass(அடிக்கப், குமார்)
nsubj:pass(aṭikkap, kumār)
nsubj:pass(beat-inf, Kumar)

~~~

Source example: `sent_id = 48`.

### `obj`: object

Marks the direct object or patient-like core argument, which is typically marked by the accusative case marker (ஐ i) in Tamil. For irrational objects, this marking is optional; when present, it also differential-marks definiteness. However, accusative marking is obligatory for rational nouns.

~~~sdparse
இந்த புத்தகத்தைக் கொடுங்கள் . \n inta puttakattaik koṭuṅkaḷ . \n this book-acc give-you .
obj(கொடுங்கள், புத்தகத்தைக்)
obj(koṭuṅkaḷ, puttakattaik)
obj(give-you, book-acc)

~~~

Source example: `sent_id = 14`.


### `iobj`: indirect object

Marks a recipient- or benefactive-like core object when another object is present. Although the indirect object (iobj) is marked using the dative suffix (-kku / -க்கு), not all dative-marked nouns function as an iobj. Depending on the predicate, a dative nominal may instead function as a dative core object (obj) or an oblique locative (obl).

~~~sdparse
குமார் அப்பாவுக்கு ஒரு படத்தைக் காட்டினான் . \n kumār appāvukku oru paṭattaik kāṭṭiṉāṉ . \n Kumar father-dat a picture-acc saw-he .
iobj(காட்டினான், அப்பாவுக்கு)
iobj(kāṭṭiṉāṉ, appāvukku)
iobj(saw-he, father-dat)

~~~

Source example: `sent_id = 23`.


## Clausal relations

### `acl`: clausal modifier of noun

Marks a clause modifying a nominal. 

~~~sdparse
எவன் நேற்று வந்தானோ அவன் என் தம்பி . \n evaṉ nēṟṟu vantāṉō avaṉ eṉ tampi . \n who yesterday came-who he my brother .
acl(தம்பி, வந்தானோ)
acl(tampi, வந்தானோ)
acl(brother, came-who)
~~~

Source example: `sent_id = 334`.

### `acl:relcl`: relative clause modifier

Marks a relative-clause-like modifier of a noun, often expressed through Tamil relative participles - (-a/-அ). Tamil often uses relative participial forms rather than English-style relative pronouns.

~~~sdparse
குமாருக்கு வேண்டிய புத்தகம் . \n kumārukku vēṇṭiya puttakam . \n Kumar-DAT want-RP book .
acl:relcl(புத்தகம், வேண்டிய)
acl:relcl(puttakam, vēṇṭiya)
acl:relcl(book, want-RP)
~~~

Source example: `sent_id = 119`.


### `advcl`: adverbial clause modifier

Marks a clausal modifier of another predicate.

~~~sdparse
குமாருக்கு இந்தத் துணி வேண்டவே வேண்டாம் . \n kumārukku intat tuṇi vēṇṭavē vēṇṭām . \n Kumar-DAT this cloth want-not-absolutely want-not.
advcl(வேண்டாம், வேண்டவே)
advcl(vēṇṭām, vēṇṭavē)
advcl(want-not, want-not-absolutely)
~~~

Source example: `sent_id = 122`.

### `advcl:cond`: conditional adverbial clause

Marks a conditional clause modifying another predicate.

~~~sdparse
நீ உண்மை சொன்னால் பிழைத்தாய் . \n nī uṇmai coṉṉāl piḻaittāy . \n you truth said-if survive
advcl:cond(பிழைத்தாய், சொன்னால்)
advcl:cond(piḻaittāy, coṉṉāl)
advcl:cond(survive, said-if)
~~~

Source example: `sent_id = 72`.

### `xcomp`: open clausal complement

Marks a complement without its own independent subject; its subject is controlled by the higher predicate.

~~~sdparse
நான் குமாரை கேட்க வருகிறேன் . \n nāṉ kumārai kēṭka varukiṟēṉ . \n I Kumar-ACC ask-INF come-I
xcomp(வருகிறேன், கேட்க)
xcomp(varukiṟēṉ, kēṭka)
xcomp(come-I, ask-INF)
~~~

Source example: `sent_id = 6`.

### `mark`: marker

Marks a clause-linking or subordination marker. Use `mark` for clause markers. Use `case` for nominal case markers or postpositions.

~~~sdparse
குமார் நல்லவன் போலத் தோன்றுகிறான் . \n kumār nallavaṉ pōla tōṉṟukiṟāṉ . \n Kumar good-boy like appear-he .
mark(தோன்றுகிறான், போல)
mark(tōṉṟukiṟāṉ, pōla)
mark(like appear-he, like)
~~~

Source example: `sent_id = 395`.

## Nominal dependents

### `amod`: adjectival modifier

Marks an adjectival modifier of a nominal. This includes derived adjectives formed with the suffix -aana, provided these suffixes have not been tokenized separately.

~~~sdparse
அங்கு நிறைய வீடுகள் இருக்கின்றன . \n aṅku niṟaiya vīṭukaḷ irukkiṉṟaṉa . \n there many houses be-they
amod(வீடுகள், நிறைய)
amod(vīṭukaḷ, niṟaiya)
amod(houses, many)
~~~

Source example: `sent_id = 2`.

### `det`: determiner

Tamil lacks a distinct class of determiners; instead, demonstratives function as determiners. `det` marks determiners, with a specific focus on demonstrative elements.

~~~sdparse
இந்தப் புத்தகத்தைக் கொடுங்கள் . \n intap puttakattaik koṭuṅkaḷ . \n this book-ACC give-you
det(புத்தகத்தைக், இந்த)
det(puttakattaik, inta)
det(book-ACC, this)
~~~

Source example: `sent_id = 14`.

### `nummod`: numeric modifier

Marks a numeric modifier of a noun.

~~~sdparse
இரண்டு நாய்கள் வந்தன . \n iraṇṭu nāykaḷ vantana . \n two dogs came-they
nummod(நாய்கள், இரண்டு)
nummod(nāykaḷ, iraṇṭu)
nummod(dogs, two)
~~~

Source example: `sent_id = 3`.

### `nmod`: nominal modifier

Marks a nominal modifier of another nominal. This should not be confused with the `compound` relation, which denotes compounding rather than syntactic modification."

~~~sdparse
சித்திரை மாதத்தோடு தமிழ் வருசம் ஆரம்பிக்கிறது . \n cittirai mātattōṭu tamiḻ varucam ārampikkiṟatu . \n April month-with Tamil year start-it
nmod(மாதத்தோடு, சித்திரை)
nmod(mātattōṭu, cittirai)
nmod(month-with, April)
~~~

Source example: `sent_id = 29`.

### `nmod:poss`: possessive nominal modifier

Marks a possessive nominal/pronominal modifier. Possessive forms may also include `Case=Gen` and `Poss=Yes` in the morphological features.

~~~sdparse
என் பையன்கள் வந்தார்கள் . \n eṉ paiyaṉkaḷ vantārkaḷ . \n my sons came-they
nmod:poss(பையன்கள், என்)
nmod:poss(paiyaṉkaḷ, eṉ)
nmod:poss(sons, my)
~~~

Source example: `sent_id = 1`.



## Adverbial and oblique relations

### `advmod`: adverbial modifier

Marks a non-clausal adverbial modifier. Since Tamil exhibits relatively free word order, the `advmod` dependent does not necessarily have to immediately precede the verb. Therefore, annotators must verify the exact head relation carefully rather than relying solely on linear proximity.

~~~sdparse
அங்கு நிறைய வீடுகள் இருக்கின்றன . \n aṅku niṟaiya vīṭukaḷ irukkiṉṟaṉa . \n there many houses exist-they
advmod(இருக்கின்றன, அங்கு)
advmod(irukkiṉṟaṉa, aṅku)
advmod(exist-they, there)
~~~

Source example: `sent_id = 2`.

### `advmod:emph`: emphatic adverbial modifier

Marks an emphatic particle or clitic modifying a predicate or modifier. Here the emphatic element தானே has to be segmented as a token according to the multiword/clitic guideline before processing it.

~~~sdparse
குமார் நேரத்தோடு வந்தால் தானே . \n kumār nērattōṭu vantāltāṉē . \n Kumar time-wtih come-if only-then
advmod:emph(வந்தால், தானே)
advmod:emph(vantāl, tāṉē)
advmod:emph(come-if, only-then)
~~~

Source example: `sent_id = 95`.


### `obl`: oblique nominal

Marks a non-core nominal dependent of a predicate. Additionally, specific non-core nominals—such as agents in passive constructions and nominals marked with the instrumental case, locative case —are annotated with specific subtypes. Examples of these structures are provided later in the documentation.

~~~sdparse
குமார் ஊருக்குப் போனான் . \n kumār ūrukkup pōṉāṉ . \n Kumar village-TO went-he
obl(போனான், ஊருக்குப்)
obl(pōṉāṉ, ūrukkup)
obl(went-he, village-TO)
~~~

Source example: `sent_id = 26`.

### `obl:agent`: passive agent

Marks the agent in a passive clause. In Tamil, agents in passive clauses are marked `inst` case markers. It also should be noted that the passive maker `padu` should be tokenised and marked with the `aux:pass` relation.

~~~sdparse
குமார் அப்பாவால் அடிக்கப் பட்டான் . \n kumār appāvāl aṭikkap paṭṭāṉ . \n Kumar father-by beat-INF was-he
obl:agent(அடிக்கப், அப்பாவால்)
obl:agent(aṭikkap, appāvāl)
obl:agent(beat-INF, father-by)
~~~

Source example: `sent_id = 48`.

### `obl:arg`: oblique argument

Marks an oblique dependent that behaves as an argument of the predicate. In this case it is a question pronoun - `etu`.

~~~sdparse
உங்களுக்கு எது வேண்டும் ? \n uṅkaḷukku etu vēṇṭum ? \n you-DAT which want ?
obl:arg(வேண்டும், எது)
obl:arg(vēṇṭum, etu)
obl:arg(want, which)
~~~

Source example: `sent_id = 150`.

### `obl:cmpr`: comparative oblique

This subtype used in the data for a comparative standard or comparison-related oblique. This is a language-specific subtype in the MWTT data.

~~~sdparse
அங்குக்கு இங்கு நல்லது . \n aṅkukku iṅku nallatu . \n there-DAT here good-it .

obl:cmpr(நல்லது, அங்குக்கு)
obl:cmpr(nallatu, aṅkukku)
obl:cmpr(good, there-DAT)
~~~

Source example: `sent_id = 69`.



### `obl:inst`: instrumental oblique

Marks an instrument or means.

~~~sdparse
பையன் சாவியால் கதவைத் திறந்தான் . \n paiyaṉ cāviyāl katavait tiṟantāṉ . \n boy key-by door-ACC opened-he
obl:inst(திறந்தான், சாவியால்)
obl:inst(tiṟantāṉ, cāviyāl)
obl:inst(opened-he, key-by)
~~~

Source example: `sent_id = 9`.

### `obl:lmod`: locative oblique modifier

Marks an oblique nominal specifying location.

~~~sdparse
அவன் ஒரு ஆபிசில் வேலை செய்கிறான் . \n avaṉ oru āpicil vēlai ceykiṟāṉ . \n he a office-LOC work do-he
obl:lmod(செய்கிறான், ஆபிசில்)
obl:lmod(ceykiṟāṉ, āpicil)
obl:lmod(do-he, office-LOC)
~~~

Source example: `sent_id = 76`.

### `obl:pmod`: place modifier

Tamil-specific subtype used in the data for place/location-like modifiers.

~~~sdparse
குமார் இன்று மட்டும் இங்கே இருக்கிறான் . \n kumār iṉṟu maṭṭum iṅkē irukkiṟāṉ . \n Kumar today only here stay-he
obl:pmod(இருக்கிறான், இங்கே)
obl:pmod(irukkiṟāṉ, iṅkē)
obl:pmod(stay-he, here)
~~~

Source example: `sent_id = 357`.


### `obl:tmod`: temporal oblique modifier

Marks an oblique nominal specifying time.

~~~sdparse
குமார் ஐந்து மணிக்கு வருவான் . \n kumār aintu maṇikku varuvāṉ . \n Kumar five hour-DAT come-he
obl:tmod(வருவான், மணிக்கு)
obl:tmod(varuvāṉ, maṇikku)
obl:tmod(come-he, hour-DAT)
~~~

Source example: `sent_id = 34`.

## Function words and coordination

### `aux`: auxiliary

Marks an auxiliary dependent of a verbal predicate. In Tamil, auxiliaries are handled this way, although one could argue that under strict UD principles, the dependency direction should be reversed since the auxiliary verb carries the tense and PNG suffixes. 

V+V forms must be checked carefully against the multiword expression guidelines.

~~~sdparse
குமார் தொழிலைக் கற்றுக் கொண்டான் . \n kumār toḻilaik kaṟṟuk koṇṭāṉ . \n Kumar work-ACC learn-VRB took-he
aux(கற்றுக், கொண்டான்)
aux(kaṟṟuk, koṇṭāṉ)
aux(learn-VRB, took-he)
~~~

Source example: `sent_id = 45`.

### `aux:neg`: negative auxiliary

This specific subtype used in the data for negative auxiliaries such as forms of `māṭṭu / மாட்டு`. This can also be handled by using `aux` with `Polarity=Neg` in features.

~~~sdparse
நான் விட மாட்டேன் . \n nāṉ viṭa māṭṭēṉ . \n I let not-I
aux:neg(விட, மாட்டேன்)
aux:neg(viṭa, māṭṭēṉ)
aux:neg(let, not-I)
~~~

Source example: `sent_id = 88`.

### `aux:pass`: passive auxiliary

Marks a passive auxiliary, commonly involving forms of படு.

~~~sdparse
குமார் அப்பாவால் அடிக்கப் பட்டான் . \n kumār appāvāl aṭikkap paṭṭāṉ . \n Kumar father-by beat-INF was-he .
aux:pass(அடிக்கப், பட்டான்)
aux:pass(aṭikkap, paṭṭāṉ)
aux:pass(beat-INF, was-he)
~~~

Source example: `sent_id = 48`.

### `case`: case marker / postposition

Marks a case marker when it is tokenised or occurs as a separate token. If a case marker remains attached as a suffix within the noun, its values should be represented in the morphological features rather than being tokenised separately. 
Postpositions must always be tokenised independently (refer to the tokenisation guidelines) and assigned the case relation; in this instance, it does not denote a morphological case. 

~~~sdparse
காலை முதல் மழை பெய்கிறது . \n kālai mutal maḻai peykiṟatu . \n morning since rain pouring-it .
case(காலை, முதல்)
case(kālai, mutal)
case(morning, since)
~~~

Source example: `sent_id = 211`.

### `cc`: coordinating conjunction

Marks a coordinating conjunction or a coordinating clitic. A clitic such as -um (உம்) is usually attached directly to the word token; therefore, it must be tokenised as a separate unit before dependency relations are assigned.


~~~sdparse
சிறிய ஆனால் நல்ல பெண் . \n ciṟiya āṉāl nalla peṇ . \n small but good girl .
cc(சிறிய, ஆனால்)
cc(ciṟiya, āṉāl)
cc(small, but)
~~~

Source example: `sent_id = 323`.


### `conj`: conjunct

Connects coordinated elements, where the first conjunct is normally treated as the structural head. According to the guidelines, adverbial markers are not tokenised separately; therefore, the suffix -māka will not be split from the host token. As seen in the example, -māka applies to the entire coordinate phrase rather than to the final conjunct (teruvukku) alone.

~~~sdparse
குமார் வாசலுக்கு உம் தெருவுக்கு உம்மாக நடந்தான் . \n kumār vācaluk kum teruvuk kumāka naṭantāṉ . \n Kumar gate-DAT and road-DAT and-ADV walked-he
conj(வாசலுக்கு, தெருவுக்கு)
conj(vācalukku, teruvukku)
conj(gate-DAT, road-DAT)
~~~

In this instance, both instances of the clitic -um will be annotated with separate cc relations, as shown below.

~~~sdparse
குமார் வாசலுக்கு உம் தெருவுக்கு உம்மாக நடந்தான் . \n kumār vācalukk um teruvukk umāka naṭantāṉ . \n Kumar gate-DAT and road-DAT and-ADV walked-he
cc(வாசலுக்கு, உம்) and cc(தெருவுக்கு, உம்மாக)
cc(vācalukku, um) and cc(teruvukk, umāka)
cc(gate-DAT, and) and cc(road-DAT, and-ADV)
~~~


Source example: `sent_id = 304`.

### `vocative`: vocative

Marks an addressed participant.

~~~sdparse
அம்மா அது நேர்ந்தது . \n ammā atu nērntatu . \n mother that happened-it
vocative(நேர்ந்தது, அம்மா)
vocative(nērntatu, ammā)
vocative(happened-it, mother)
~~~

Source example: `sent_id = 397`.

## Multiword-expression and special relations

Multiword expressions in Tamil can exhibit various types of syntactic relations among their components. This section accounts for the compound structures found within the dataset, although other types may also occur.

### `compound:lvc`: light verb construction


Marks a light verb construction. In the MWTT data, the nominal or predicate element is treated as the head, while the light or support verb acts as the dependent. Although one could argue that treating the noun as the head is a purely semantically motivated decision—given that the light verb actually carries the tense, aspect, and PNG agreement suffixes—the current decision is to annotate based on the semantic head rather than the syntactic head.
Further, we also aware that one can also think of proposing a complex lemma, like ōyvueṭukka (ōyvu+eṭukka).

~~~sdparse
குமார் ஓய்வு எடுக்க வேண்டும் . \n kumār ōyvu eṭukka vēṇṭum . \n Kumar rest-NOUN take-INF must
compound:lvc(ஓய்வு, எடுக்க)
compound:lvc(ōyvu, eṭukka)
compound:lvc(rest-NOUN, take-INF)

~~~

Source example: `sent_id = 500`.


### `compound:redup`: reduplicated compound

Marks reduplication or repeated elements. Reduplication is a widely used in Dravidian languages.

~~~sdparse
இவ்வளவு நான் சாப்பிட முடியவே முடியாது . \n ivvaḷavu nāṉ cāppiṭa muṭiyavē muṭiyātu . \n this-much I eat-to can-EMPH cannot-it
compound:redup(முடியாது, முடியவே)
compound:redup(muṭiyātu, muṭiyavē)
compound:redup(cannot-it, can-EMPH)

~~~
