import { ChapterComponent } from "../chapter-component/models";
import { Chapter } from "../chapter/models";
import { ComponentPickerService } from "./component-picker.service";

describe('ComponentPickerService', () => {
	let componenentPickerService: ComponentPickerService;
	beforeEach(() => { componenentPickerService = new ComponentPickerService(); });

	it('#removeComponent should remove a component from array', () => {
		const fakeChapter: Chapter = FAKE_CHAPTER_MOCK;
		const initialChapterComponentsLength = fakeChapter.chapterComponents.length;
		expect(fakeChapter.chapterComponents.length == initialChapterComponentsLength);
		componenentPickerService.removeComponent(fakeChapter, fakeChapter.chapterComponents[0]);
		expect(fakeChapter.chapterComponents.length).toBe(initialChapterComponentsLength - 1);
	});

	it('#addComponent should add a component to array', () => {
		const fakeChapter: Chapter = FAKE_CHAPTER_MOCK;
		const newComponent: ChapterComponent = FAKE_COMPONENT_MOCK;
		const initialChapterComponentsLength = fakeChapter.chapterComponents.length;
		expect(fakeChapter.chapterComponents.length == initialChapterComponentsLength);
		componenentPickerService.addComponent(fakeChapter, newComponent);
		expect(fakeChapter.chapterComponents.length).toBe(initialChapterComponentsLength + 1);
	});

	it('#addComponent should not add component if it already exists', () => {
		const fakeChapter: Chapter = FAKE_CHAPTER_MOCK;
		const initialChapterComponentsLength = fakeChapter.chapterComponents.length;
		expect(fakeChapter.chapterComponents.length == initialChapterComponentsLength);
		componenentPickerService.addComponent(fakeChapter, fakeChapter.chapterComponents[0]);
		expect(fakeChapter.chapterComponents.length).toBe(initialChapterComponentsLength);
	});
});

export const FAKE_COMPONENT_MOCK: ChapterComponent = {
	id: 100,
	title: 'Test Component 100',
	description: 'Lorem ipsum',
	code: 'XYZ100'
};

export const FAKE_CHAPTER_MOCK: Chapter = {
	id: 1,
	title: 'Test Chapter 1',
	chapterComponents: [
		{
			id: 1,
			title: 'Test Component 1',
			description: 'Lorem ipsum',
			code: 'XYZ1'
		},
		{
			id: 3,
			title: 'Test Component 3',
			description: 'Lorem ipsum',
			code: 'XYZ3'
		},
		{
			id: 5,
			title: 'Test Component 5',
			description: 'Lorem ipsum',
			code: 'XYZ5'
		}
	]
};