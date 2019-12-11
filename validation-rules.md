---
layout: base
title:  'Validation and Release Rules 2.5'
udver:  '2'
---

# UD Validation 2.5

The following mechanism ensures that we can add new validation tests on one hand, and we do not lose old treebanks on the other hand. Note that “new tests” do not really mean new guidelines. These tests typically check guidelines that were already valid before but we were not able to test them.
See the [release checklist](release_checklist.html) for general information on validation and treebank requirements.
See the [online validation report](http://quest.ms.mff.cuni.cz/udvalidator/)
for the current status of the `dev` branch of each treebank.

## New Treebanks

Treebanks that have not yet been released in UD must pass all currently required tests before they can be released for the first time.

## Previously Released Treebanks

### Treebanks with Unfinished New Development (UNDev)

The treebank has been valid and released under the current major version of the UD guidelines (v2 at present). Since then, data were modified or added and new errors were introduced. These are new errors, not newly discovered old errors. If the errors are not fixed before the upcoming data freeze, the treebank will be released in the same form in which it was released last time. The current contents of the dev branch will not be merged into the master branch.

### Legacy Treebanks

The treebank has been successfully released under the current major version of the UD guidelines (v2 at present) and passed all mandatory tests that were available at the time of that release. Legacy treebanks are not required to pass newly added tests (although their maintainers are of course encouraged to fix the newly found errors) and they will be included in future releases as long as the major version of the guidelines has not changed. If they are being fixed, they can be also fixed incrementally. For example: The treebank passed all tests required for UD 2.3 and became part of that release. After UD 2.3, several new tests were added and the treebank does not pass two of them, labeled A and B. The maintainers manage to fix all type A errors but not type B errors; they do not introduce any new errors of other types. The partially fixed treebank will be released in UD 2.4, still as a legacy treebank, but the exception is now granted only to the type B errors. It is not allowed to reintroduce any type A error in the future.

### Obsolete Treebanks

The UD Japanese KTC treebank was part of UD 1.* releases and it was never converted to the v2 guidelines. Therefore it was not part of UD 2.* releases.

If there is a new version of the guidelines in the future (v3), it must specify how the legacy treebanks are to be treated. Especially if the new version of the guidelines is not backwards-compatible.

# Levels of Validity

The validation tests are organized to several levels. The validation script can be optionally invoked to only test validity up to level L (but the official on-line validation will still require passing the higher levels in order for the treebank to be released).

## Level 1: Backbone CoNLL-U Format

These are the core tests that check the file integrity. Software tools can crash if their input is not valid at this level. Level 1 should be relatively stable; it is not expected that new tests will be added here. (And if they are, all treebanks including legacy treebanks must be made to pass them.)

Example tests: each token line has 10 columns, there is an empty line after each sentence. Except for token ID, values in columns can be unspecified, as in partially processed data. The file could also contain non-UD annotation and be level-1 valid.

## Level 2: Basic UD Concepts

The UPOS tag must be present and it must be one of the 17 tags defined in UD. HEAD and DEPREL must be present, universal part of DEPREL must be one of the 37 known labels, the structure must be a rooted tree. Morphological features, if present, must follow the prescribed format. Enhanced dependencies in DEPS, if present, are checked as well.

The annotation in LEMMA, XPOS, FEATS, DEPS and MISC is optional and it can be unspecified. A few treebanks omit even the word FORM; this is for copyright reasons, the user must obtain a licensed copy of the underlying text and then run specialized software to merge it with the UD annotation.

Note that any feature-value pair and any relation subtype is valid on level 2 if it has the expected form (checked by a regular expression). To disallow language-specific features and relation subtypes, use the validation level 4 but set the language to “ud”.

Level 2 should be relatively stable; it is not expected that new tests will be added here. (And if they are, all treebanks including legacy treebanks must be made to pass them.)

## Level 3: Universal Guidelines

Any language-independent rule that follows from the guidelines and can be reliably checked automatically will be checked here unless it was already checked at level 2. Typical rules involve (in)compatibility between particular UPOS tags, relation types and tree topology. If enhanced dependencies are present, the rules can apply to them too.

The first rule of this type was introduced between the releases 2.1 and 2.2. It verifies that certain types of relations (e.g., conj) always go left-to-right. Numerous other level-3 tests were added later; legacy treebanks can be released without passing them.

## Level 4: Language-specific Labels

Morphological features (FEATS) and relation types (DEPREL and DEPS) allow language-specific extensions. Therefore the lower levels checked only the general format of these columns but not the actual labels. Level 4 assumes that we know the language of the data we are validating and we can check a list of available labels in a separate file. The current practice is that maintainers of treebanks of a given language collectively maintain the lists of labels for that language. A feature-value pair is considered valid if it is either documented in the universal guidelines or it is listed in the language-specific list. A relation subtype is considered valid if it is listed in the language-specific list.

In addition to features and deprels, language-specific configuration may also describe the permitted types of “words with spaces”. These are currently described using regular expressions.

In the future, this level could be modified in the following ways:

* It is not enough that a label is listed. It must be also documented. If the validator does not find a corresponding page in the UD documentation, or if the page does not say that this label can be used in the given language, the label is not valid.
* Usage of universally defined labels can be restricted if they do not apply to a language.

The present implementation of level 4 does not pose a problem to legacy treebanks: their labels can be simply added to the list. If a stricter approach is taken in the future, legacy treebanks will need exceptions.

Note that it could make sense to check level 4 for a treebank that is valid on levels 1 and 2 but not 3. It would mean that we want to test the general file format and label inventory, but not the more intricate interplay between various pieces of the annotation. However, the current implementation of the validator assumes that a treebank valid on a level is also valid on all lower levels.

Note that language-specific guidelines can change between releases and do not have to wait until the next major UD guidelines upgrade, as long as they do not contradict the current universal guidelines.

## Level 5: Language-specific Guidelines

Any other reliably testable rules that apply to one language or a group of languages but not to all languages. At present there is an experimental set of level-5 rules that lists for each language the lemmas that can be auxiliary verbs/particles, and lemmas that can be copulas.

Future rules could specify that a particular feature must or must not occur with a particular UPOS tag; however, we would have to account for the fact that features in general are optional and the treebank may not have them at all.

## Level 6: Treebank-specific Requirements

One may want to test that some kind of annotation, which is generally optional, is always present in their treebank. For example, all words should have the Translit and Gloss attributes in the MISC column. No such tests have been implemented so far.

## Warnings

Many potential rules on levels 3-5 cannot be implemented as strict tests because there are legitimate exceptions. However, if it is still probable that a violation of the rule signals an actual annotation error, the rule could issue a warning. No such tests have been implemented so far.

# Other Notes

We should have a section in the documentation that would list all validation tests, explain them, link to the relevant parts of the guidelines and possibly also to the relevant part of the source code of the validation script. Some newly added rules are discussed and refined; in such cases, we may want to link to the corresponding issues in the issue tracker too.

It would be nice if the validator could output the relevant CoNLL-U snippet with the errors highlighted, possibly even visualizing the tree. This would be in addition to providing the id of the problematic sentence/line, and it would be output on demand only. UDAPI already does this, so maybe we could run the validator together with UDAPI.
