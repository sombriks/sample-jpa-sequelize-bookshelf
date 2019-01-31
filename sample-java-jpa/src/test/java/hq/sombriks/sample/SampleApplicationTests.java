package hq.sombriks.sample;

import static org.junit.Assert.assertEquals;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import hq.sombriks.sample.model.Person;

@SpringBootTest
@RunWith(SpringRunner.class)
public class SampleApplicationTests {

	@PersistenceContext
	private EntityManager em;

	@Test
	public void contextLoads() {
	}

	@Test
	public void shouldListPeople() throws Exception {
		List<Person> people = em.createQuery("select p from Person p", Person.class)//
				.getResultList();
		assertEquals(8, people.size());
	}

}
