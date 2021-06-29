--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2
-- Dumped by pg_dump version 13.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO postgres;

--
-- Name: TodoItems; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."TodoItems" (
    id integer NOT NULL,
    content character varying(255) NOT NULL,
    complete boolean DEFAULT false,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "todoId" integer
);


ALTER TABLE public."TodoItems" OWNER TO postgres;

--
-- Name: TodoItems_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."TodoItems_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."TodoItems_id_seq" OWNER TO postgres;

--
-- Name: TodoItems_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."TodoItems_id_seq" OWNED BY public."TodoItems".id;


--
-- Name: Todos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Todos" (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Todos" OWNER TO postgres;

--
-- Name: Todos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Todos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Todos_id_seq" OWNER TO postgres;

--
-- Name: Todos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Todos_id_seq" OWNED BY public."Todos".id;


--
-- Name: TodoItems id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."TodoItems" ALTER COLUMN id SET DEFAULT nextval('public."TodoItems_id_seq"'::regclass);


--
-- Name: Todos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Todos" ALTER COLUMN id SET DEFAULT nextval('public."Todos_id_seq"'::regclass);


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."SequelizeMeta" VALUES
	('20210325031102-create-todo.js'),
	('20210325031224-create-todo-item.js');


--
-- Data for Name: TodoItems; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: Todos; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Todos" VALUES
	(2, 'first-update', '2021-06-10 06:15:31.97+07', '2021-06-10 06:15:31.97+07');


--
-- Name: TodoItems_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."TodoItems_id_seq"', 1, true);


--
-- Name: Todos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Todos_id_seq"', 2, true);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: TodoItems TodoItems_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."TodoItems"
    ADD CONSTRAINT "TodoItems_pkey" PRIMARY KEY (id);


--
-- Name: Todos Todos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Todos"
    ADD CONSTRAINT "Todos_pkey" PRIMARY KEY (id);


--
-- Name: TodoItems TodoItems_todoId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."TodoItems"
    ADD CONSTRAINT "TodoItems_todoId_fkey" FOREIGN KEY ("todoId") REFERENCES public."Todos"(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

